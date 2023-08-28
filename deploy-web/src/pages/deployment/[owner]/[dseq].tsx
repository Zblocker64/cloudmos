import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import Layout from "@src/components/layout/Layout";
import PageContainer from "@src/components/shared/PageContainer";
import { BASE_API_MAINNET_URL, BASE_API_TESTNET_URL } from "@src/utils/constants";
import axios from "axios";
import { Box, Button, Chip, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { UrlService } from "@src/utils/urlUtils";
import Link from "next/link";
import { useFriendlyMessageType } from "@src/hooks/useFriendlyMessageType";
import { getSplitText } from "@src/hooks/useShortText";
import { FormattedNumber, FormattedTime } from "react-intl";
import { bytesToShrink } from "@src/utils/unitUtils";
import { DeploymentDetail } from "@src/types/deployment";
import { Address } from "@src/components/shared/Address";
import { LeaseSpecDetail } from "@src/components/shared/LeaseSpecDetail";
import { roundDecimal } from "@src/utils/mathHelpers";
import { LabelValue } from "@src/components/shared/LabelValue";
import { Title } from "@src/components/shared/Title";
import { NextSeo } from "next-seo";
import { CustomTableHeader, CustomTableRow } from "@src/components/shared/CustomTable";
import { AKTAmount } from "@src/components/shared/AKTAmount";
import AddIcon from "@mui/icons-material/Add";
import { useKeplr } from "@src/context/KeplrWalletProvider";
import { DepositModal } from "@src/components/deployment/DepositModal";
import { useState } from "react";

type Props = {
  owner: string;
  dseq: string;
  deployment: DeploymentDetail;
};

const useStyles = makeStyles()(theme => ({}));

const DeploymentDetailPage: React.FunctionComponent<Props> = ({ owner, dseq, deployment }) => {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const { classes } = useStyles();
  const theme = useTheme();
  const { address } = useKeplr();

  const canDeposit = address && address === owner && deployment?.status === "active";

  function onDepositClick() {
    setShowDepositModal(true);
  }

  return (
    <Layout>
      <NextSeo title={`Deployment ${owner}/${dseq}`} />

      <DepositModal open={showDepositModal} owner={owner} dseq={dseq} onClose={() => setShowDepositModal(false)} />

      <PageContainer>
        <Box sx={{ marginBottom: "2rem" }}>
          <Title value="Deployment Details" />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Title value="Summary" subTitle sx={{ marginBottom: "1rem" }} />

            <Paper sx={{ padding: 2, marginBottom: "1rem" }} elevation={2}>
              <LabelValue
                label="Owner"
                value={
                  <Link href={UrlService.address(deployment.owner)}>
                    <Address address={deployment.owner} />
                  </Link>
                }
                labelWidth="12rem"
              />
              <LabelValue
                label="Status"
                value={<Chip label={deployment.status} color={deployment.status === "active" ? "success" : "error"} size="small" />}
                labelWidth="12rem"
              />
              <LabelValue label="DSEQ" value={deployment.dseq} labelWidth="12rem" />
              <LabelValue
                label="Balance"
                value={
                  <>
                    <AKTAmount uakt={deployment.balance} showAKTLabel showUSD />
                    {canDeposit && (
                      <Box mt={1}>
                        <Button variant="outlined" color="secondary" size="small" onClick={onDepositClick}>
                          <AddIcon />
                          &nbsp; Add Funds
                        </Button>
                      </Box>
                    )}
                  </>
                }
                labelWidth="12rem"
              />
              {deployment.leases.length > 0 && (
                <LabelValue
                  label="Total Cost"
                  value={
                    <>
                      <Typography variant="body1">
                        <FormattedNumber style="currency" currency="USD" value={deployment.totalMonthlyCostUSD} /> per month
                      </Typography>
                      <Typography variant="caption">
                        <FormattedNumber value={deployment.totalMonthlyCostAKT} /> $AKT per month
                      </Typography>
                    </>
                  }
                  labelWidth="12rem"
                />
              )}
            </Paper>

            <Title value="Timeline" subTitle sx={{ marginBottom: "1rem" }} />

            <Paper sx={{ padding: 2 }} elevation={2}>
              <TableContainer>
                <Table size="small">
                  <CustomTableHeader>
                    <TableRow>
                      <TableCell>Transaction</TableCell>
                      <TableCell align="center">Event</TableCell>
                      <TableCell align="center">Date</TableCell>
                    </TableRow>
                  </CustomTableHeader>

                  <TableBody>
                    {deployment.events.map((event, i) => (
                      <CustomTableRow key={`${event.txHash}_${i}`}>
                        <TableCell>
                          <Link href={UrlService.transaction(event.txHash)} target="_blank">
                            {getSplitText(event.txHash, 6, 6)}
                          </Link>
                        </TableCell>
                        <TableCell align="center">{useFriendlyMessageType(event.type)}</TableCell>
                        <TableCell align="center">
                          <FormattedTime value={event.date} day="2-digit" month="2-digit" year="numeric" />
                        </TableCell>
                      </CustomTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Title value="Leases" subTitle sx={{ marginBottom: "1rem" }} />

            {deployment.leases.length === 0 && <>This deployment has no lease</>}
            {deployment.leases.map(lease => {
              const _ram = bytesToShrink(lease.memoryQuantity);
              const _storage = bytesToShrink(lease.storageQuantity);

              return (
                <Paper key={lease.oseq + "_" + lease.gseq} sx={{ padding: "1rem", marginBottom: "1rem" }} elevation={2}>
                  <LabelValue label="OSEQ" value={lease.oseq} labelWidth="12rem" />
                  <LabelValue label="GSEQ" value={lease.gseq} labelWidth="12rem" />
                  <LabelValue
                    label="Status"
                    value={<Chip label={lease.status} color={lease.status === "active" ? "success" : "error"} size="small" />}
                    labelWidth="12rem"
                  />
                  <LabelValue
                    label="Total Cost"
                    value={
                      <>
                        <Typography variant="body1">
                          <FormattedNumber style="currency" currency="USD" value={lease.monthlyCostUSD} /> per month
                        </Typography>
                        <Typography variant="caption">
                          <FormattedNumber value={lease.monthlyCostAKT} /> $AKT per month
                        </Typography>
                      </>
                    }
                    labelWidth="12rem"
                  />
                  <LabelValue
                    label="Specs"
                    value={
                      <>
                        <LeaseSpecDetail type="cpu" value={lease.cpuUnits / 1_000} />
                        {!!lease.gpuUnits && <LeaseSpecDetail type="gpu" value={lease.gpuUnits} />}
                        <LeaseSpecDetail type="ram" value={`${roundDecimal(_ram.value, 1)} ${_ram.unit}`} />
                        <LeaseSpecDetail type="storage" value={`${roundDecimal(_storage.value, 1)} ${_storage.unit}`} />
                      </>
                    }
                    labelWidth="12rem"
                  />
                  <LabelValue
                    label="Provider"
                    value={
                      <>
                        <Link href={UrlService.address(lease.provider.address)} title={lease.provider.address}>
                          {getSplitText(lease.provider.address, 10, 10)}
                        </Link>
                        <br />
                        {new URL(lease.provider.hostUri).hostname}
                      </>
                    }
                    labelWidth="12rem"
                  />
                  <LabelValue
                    label="Provider Attributes"
                    value={lease.provider.attributes.map(attribute => (
                      <div key={attribute.key}>
                        {attribute.key}: {attribute.value}
                      </div>
                    ))}
                    labelWidth="12rem"
                  />
                </Paper>
              );
            })}
          </Grid>
        </Grid>
      </PageContainer>
    </Layout>
  );
};

export default DeploymentDetailPage;

export async function getServerSideProps({ params, query }) {
  try {
    const deployment = await fetchDeploymentData(params?.owner, params?.dseq, query.network as string);

    return {
      props: {
        owner: params?.owner,
        dseq: params?.dseq,
        deployment
      }
    };
  } catch (error) {
    if (error.response?.status === 404 || error.response?.status === 400) {
      return {
        notFound: true
      };
    } else {
      throw error;
    }
  }
}

async function fetchDeploymentData(owner: string, dseq: string, network: string) {
  const apiUrl = network === "testnet" ? BASE_API_TESTNET_URL : BASE_API_MAINNET_URL;
  const response = await axios.get(`${apiUrl}/deployment/${owner}/${dseq}`);
  return response.data;
}
