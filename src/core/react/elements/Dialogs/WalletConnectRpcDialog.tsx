import React, { useContext } from 'react';
import { Box, Button, Typography, Divider, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Grid, CardMedia, Link } from '@material-ui/core';

import { Web3Context } from '../../../web3/Web3Context'
import { commonLanguage } from '../../../web3/web3Reducer';

import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import { getConfig } from '../../../../config';

interface RenderParams {
	dispatch: React.Dispatch<any>;

	error: string | null;

	rpcAddress: string | null;
	setRpcAddress: React.Dispatch<any>;
}

const Render: React.FC<RenderParams> = React.memo(({ dispatch, error, rpcAddress, setRpcAddress }) => {
	const { ecosystemName } = getConfig()

	const onSubmit = async (e: any) => {
		e.preventDefault();

		dispatch({
			type: commonLanguage.commands.InitializeWalletConnect,
			payload: {
				rpcAddress
			}
		});
	}

	const onClose = () => {
		dispatch({ type: commonLanguage.commands.CloseDialog });
	}


	return <Dialog open={true} onClose={onClose} aria-labelledby="form-dialog-title">
		<form onSubmit={onSubmit}>
			<DialogTitle id="form-dialog-title">
				<Box display="flex" alignItems="center" alignContent="center">
					WalletConnect Ethereum RPC Mainnet Endpoint*
					<Box display="flex" pl={1} ><SettingsInputAntennaIcon style={{ color: '#0ff' }} /></Box>
				</Box>
			</DialogTitle>
			<DialogContent>
				<Box>* This step is not required for MetaMask / Brave Browser</Box>
				<Box my={3}><Divider /></Box>

				<Typography gutterBottom={true}>{ecosystemName} uses an advanced real-time dashboard. To connect to our decentralized dashboard you will need to provide a valid Ethereum Mainnet RPC Endpoint.</Typography>
				<Typography gutterBottom={true}>You can register for a <strong>FREE</strong> <Link href="https://infura.io/" color="secondary" target="_blank" rel="noopener noreferrer">infura.io</Link> account to generate a personal RPC endpoint. To ensure fair use we do not provide a public RPC endpoint.</Typography>

				<Box my={3}>
					<Grid container alignItems="center" justify="center" alignContent="center">
						<Grid item>
							<CardMedia component="img" image="./images/infura.png" style={{ maxWidth: 343 }} />
						</Grid>
					</Grid>
				</Box>

				<Box mt={3} mb={6}>
					<TextField
						autoFocus
						id="name"
						label="Ethereum RPC Mainnet Endpoint (WSS or HTTP)"
						placeholder="wss://YOUR_MAINNET_ETHEREUM_RPC_ENDPOINT_HERE..."
						type="text"
						variant="outlined"
						value={rpcAddress}
						onChange={(e) => setRpcAddress(e.target.value)}
						fullWidth
						error={!!error}
						helperText={error}
					/>
				</Box>
				<Box mt={2}><Divider /></Box>
			</DialogContent>
			<DialogActions>
				<Box mb={1} mr={2}>
					<Box mr={2} display="inline-block">
						<Button onClick={onClose}  >
							Cancel
						</Button>
					</Box>
					<Button type="submit" color="secondary" size="large" variant="outlined"  >
						Continue
					</Button>
				</Box>
			</DialogActions>
		</form>
	</Dialog>
});

const getWalletConnectRpc = () => {
	if (!localStorage) {
		return ''
	}
	const walletConnectRpc = localStorage.getItem('walletConnectRpc')

	// Generate new private key on connecting (but store it so same user gets same privateKey)
	if (!walletConnectRpc) {
		return ''
	}

	return walletConnectRpc;
}

const WalletConnectRpcDialog: React.FC = () => {
	const { state: web3State, dispatch: web3Dispatch } = useContext(Web3Context)
	const [rpcAddress, setRpcAddress] = React.useState(getWalletConnectRpc());

	const { error } = web3State;

	return <Render
		rpcAddress={rpcAddress}
		error={error}
		setRpcAddress={setRpcAddress}
		dispatch={web3Dispatch}
	/>
}

export default WalletConnectRpcDialog;