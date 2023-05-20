import React from 'react';
import { Box, Container, makeStyles, Paper, Link } from '@material-ui/core';

import { theme } from '../../styles'

import FooterFragment from '../elements/Fragments/FooterFragment';
import Header from '../elements/Fragments/Header';
import { getConfig } from '../../../config';

const useStyles = makeStyles(() => ({
	logoContainer: {
		[theme.muiTheme.breakpoints.down('sm')]: {
			flexGrow: '1',
			textAlign: 'center'
		},
	},
	title: {
		fontSize: '2.8rem',
		'& .MuiGrid-item': {
			display: 'flex',
			alignItems: 'center'
		},

		[theme.muiTheme.breakpoints.down('md')]: {
			fontSize: '2rem',
		},
		[theme.muiTheme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
			textAlign: 'center',
			'& .MuiGrid-container': {
				justifyContent: 'center'
			},
			marginBottom: theme.muiTheme.spacing(3)
		},
	},
	titleSlogan: {
		[theme.muiTheme.breakpoints.down('sm')]: {
			textAlign: 'center',
		}
	},
	arrow: {
		color: '#0ff',
		fontSize: '2rem',
		verticalAlign: 'middle',
		[theme.muiTheme.breakpoints.down('md')]: {
			fontSize: '1.5rem',
		},
		[theme.muiTheme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		},
	},
	paperBorders: {
		borderTop: `1px solid ${theme.classes.palette.highlight}`,
		borderBottom: `1px solid ${theme.classes.palette.highlight}`,
	},
	paperBottom: {
		borderTop: `1px solid ${theme.classes.palette.highlight}`,
	},
}));

const Terms: React.FC = React.memo(() => {
	const classes = useStyles();
	const { ecosystemName, dashboardAbsoluteUrl, mitCopyrightYear } = getConfig()

	return <>
		<Box mt={8}>
			<Header isSubPage={true} />

			<Paper className={classes.paperBorders}>
				<Box py={6}>
					<Container style={{ lineHeight: '2rem' }}>
						<p>You are browsing a build of {ecosystemName} Decentralized Dashboard: <Link href={dashboardAbsoluteUrl} rel="noopener noreferrer" target="_blank" color="secondary">{dashboardAbsoluteUrl}</Link></p>
						<p>MIT License</p>

						<p>Copyright (c) {mitCopyrightYear} {ecosystemName}</p>

						<p>Permission is hereby granted, free of charge, to any person obtaining a copy
							of this software and associated documentation files (the "Software"), to deal
							in the Software without restriction, including without limitation the rights
							to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
							copies of the Software, and to permit persons to whom the Software is
							furnished to do so, subject to the following conditions:</p>

						<p>The above copyright notice and this permission notice shall be included in all
							copies or substantial portions of the Software.</p>

						<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
							IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
							FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
							AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
							LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
							OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
							SOFTWARE.</p>
					</Container>
				</Box>
			</Paper>
		</Box>

		<FooterFragment />
	</>
})

export default Terms;