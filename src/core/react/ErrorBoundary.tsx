import React, { ErrorInfo } from "react";
import { Typography, Box, Grid, Button, Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import logo from '../../svgs/logo.svg'; // Tell webpack this JS file uses this image

type ErrorState = {
	hasError: boolean;
	error?: Error;
	errorInfo?: ErrorInfo;
}
/**
 * This will catch any exceptions that happen and show the middle of the screen (check console for more info)
 */
export default class ErrorBoundary extends React.Component<{}, ErrorState> {
	constructor(props: any) {
		super(props);

		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Display fallback UI
		this.setState({
			hasError: true,
			error,
			errorInfo
		});
	}

	render() {
		const { hasError, error, errorInfo } = this.state

		const getLogo = () => {
			return <img src={logo} alt="Logo" style={{ width: '128px' }} />;
		}

		const getErrorMessage = () => {
			if (!hasError) {
				return <></>;
			}

			const getStack = () => {
				if (!errorInfo) {
					return <></>
				}

				return <pre><Typography color="textSecondary">{errorInfo.componentStack}</Typography></pre>
			}

			const errorLines = typeof error === 'object' ? Object.entries(error) : ['Message', error as any]

			const errorLinesRows = errorLines.map(([key, value]) => <TableRow key={key}>
				<TableCell component="th" scope="row">
					{key}
				</TableCell>
				<TableCell>{value}</TableCell>
			</TableRow>);

			return <Box alignItems="center" justifyContent="center" display="flex" flexDirection="column" style={{ height: '100vh' }}>
				<Box my={6}>
					<Grid container justify="center"><Grid item>{getLogo()}</Grid></Grid>
					<Box mt={6}>
						<TableContainer component={Paper}>
							<Table aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Error</TableCell>
										<TableCell>Description</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{errorLinesRows}
								</TableBody>
							</Table>
						</TableContainer>
					</Box>
					<Box mt={3} mb={6} textAlign="center">
						{getStack()}
					</Box>
				</Box>
			</Box>
		}

		if (hasError) {
			// You can render any custom fallback UI
			return <Container maxWidth="md">
				{getErrorMessage()}
			</Container>
		}
		return this.props.children;
	}
}

