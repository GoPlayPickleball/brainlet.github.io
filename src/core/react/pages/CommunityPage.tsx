import React, { useContext } from 'react';
import { Box, Container, Typography, Grid, makeStyles, Paper, Card, CardActionArea, Link, List, ListSubheader, ListItem } from '@material-ui/core';

import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import TimelineIcon from '@material-ui/icons/Timeline';

import discordLogo from '../../../svgs/discord.svg';
import mediumLogo from '../../../svgs/medium.svg';
import btcLogo from '../../../svgs/bitcoin.svg';

import { theme } from '../../styles'

import FooterFragment from '../elements/Fragments/FooterFragment';
import { helpArticles, SearchCategory, SearchCategoryText } from '../../helpArticles';
import { commonLanguage } from '../../web3/web3Reducer';
import { Web3Context } from '../../web3/Web3Context';

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
	heroContent: {
	},
	cardHeader: {
		border: `1px solid ${theme.classes.palette.highlight}`,
		color: theme.muiTheme.palette.secondary.contrastText
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.muiTheme.spacing(2),
	},
	paperBorders: {
		borderTop: `1px solid ${theme.classes.palette.highlight}`,
		borderBottom: `1px solid ${theme.classes.palette.highlight}`,
	},
	paperBottom: {
		borderTop: `1px solid ${theme.classes.palette.highlight}`,
	},
	comparisonTable: {
		'& .MuiTableCell-head': {
			background: theme.classes.palette.secondaryBackground,
			color: theme.classes.palette.highlight,
			fontSize: '1.3rem'
		},
		'& [role=cell]': {
			color: theme.classes.palette.highlight,
		}
	},
	point: {
		[theme.muiTheme.breakpoints.down('sm')]: {
			textAlign: "center"
		}
	},
	helpCategoryHeader: {
		color: theme.classes.palette.highlight,
	},
	featurePoint: {
		marginBottom: 0
	}
}));

interface PointParams {
	title: React.ReactFragment;
	content: React.ReactFragment;
	icon: React.ReactFragment;
	mt?: number;
	mb?: number;
}

interface RenderProps {
	dispatch: React.Dispatch<any>;
}

const Render: React.FC<RenderProps> = React.memo(({ }) => {
	const classes = useStyles();

	const getPoint = ({ title, content, icon, mt, mb }: PointParams) => {
		return <Box mt={mt !== undefined ? mt : 4} mb={mb !== undefined ? mb : 4}>
			<Grid
				container
				spacing={3}
				justify="center"
				className={classes.point}
			>
				<Grid item>
					{icon}
				</Grid>
				<Grid item md={8} lg={10}>
					<Box mb={1} mt={1}>
						<Typography variant="h4" color="textPrimary">
							{title}
						</Typography>
					</Box>
					<Typography variant="h6" color="textSecondary" paragraph className={classes.featurePoint}>
						{content}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	}

	const getSocialPoints = () => {
		return <>
			<Link href="https://www.datamineglobal.org" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <LanguageIcon style={{ fontSize: theme.muiTheme.typography.h3.fontSize, color: theme.classes.palette.highlight }} />,
							title: 'Website: datamineglobal.org',
							content: `Run by the creators of the original Datamine Economic Whitepaper. A community-driven website focusing on exploring the Datamine Ecosystem as a solution to volatility and inflation.`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://discord.gg/2dQ7XAB22u" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <img src={discordLogo} alt="Discord: Datamine Network" width="48" height="48" />,
							title: 'Discord: Datamine Network',
							content: <>This Discord community is moderated by Datamine Ecosystem Smart Contact &amp; Analytics Architects. Here you can find regular development &amp; social updates for Datamine Network. <Typography variant="h6" color="textPrimary" display="inline">Currently this is the most active community.</Typography></>
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://t.me/MintFLUX" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <TelegramIcon style={{ fontSize: theme.muiTheme.typography.h3.fontSize, color: theme.classes.palette.highlight }} />,
							title: 'Telegram: MintFLUX',
							content: `A popular Telegram community ran completely by community members! This community is ran by a group of long-time community members.`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://twitter.com/dataminenetwork" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <TwitterIcon style={{ fontSize: theme.muiTheme.typography.h3.fontSize, color: theme.classes.palette.highlight }} />,
							title: 'Twitter: @dataminenetwork',
							content: `This Twitter community is moderated by Datamine Ecosystem Smart Contact &amp; Analytics Architects. Here you can find regular updates to Datamine Network & Analytics platform. Be sure to follow!`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://damalytics.web.app/" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <TimelineIcon style={{ fontSize: theme.muiTheme.typography.h3.fontSize, color: theme.classes.palette.highlight }} />,
							title: 'Analytics Tool: DAM Community Calculator',
							content: `An amazing APY calculator for DAM & FLUX. Created and hosted by the community.`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://medium.com/@dataminenetwork" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <img src={mediumLogo} alt="Medium: Datamine Network" width="48" height="48" />,
							title: 'Medium: Datamine Network',
							content: `Here you can find announcements of big releases and milestones for Datamine Network & Analytics platform.`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://www.reddit.com/r/dataminecrypto" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <RedditIcon style={{ fontSize: theme.muiTheme.typography.h3.fontSize, color: theme.classes.palette.highlight }} />,
							title: 'Reddit: /r/dataminecrypto',
							content: `Currently the only Datamine Reddit community. Here you can find various discussions between Datamine community members. Currently looking for more participation!`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://twitter.com/DatamineM" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <TwitterIcon style={{ fontSize: theme.muiTheme.typography.h3.fontSize, color: theme.classes.palette.highlight }} />,
							title: 'Twitter: @DatamineM',
							content: `This Twitter account is ran by our community members. Currently this is the most active Twitter account and you can find regular updates to Datamine Ecosystem.`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://www.instagram.com/datamine_defi/" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <InstagramIcon style={{ fontSize: theme.muiTheme.typography.h3.fontSize, color: theme.classes.palette.highlight }} />,
							title: 'Instagram: datamine_defi',
							content: `An Instagram channel ran by community members. Development updates in an image form!`
						})}
					</CardActionArea>
				</Card>
			</Link>
			<Link href="https://bitcointalk.org/index.php?topic=5246889" target="_blank" rel="noopener noreferrer">
				<Card elevation={0}>
					<CardActionArea>
						{getPoint({
							icon: <img src={btcLogo} alt="Medium" width="48" height="48" />,
							title: 'Bitcointalk.org',
							content: `The most popular cryptocurrency forum. This is the original Datamine launch forum thread and can be used for community discussions. This thread is moderated by Bitcointalk.org moderators.`
						})}
					</CardActionArea>
				</Card>
			</Link>
		</>
	}

	return <>
		<Box mt={8}>
			<Box mt={6} mb={6}>
				<Container>
					<Typography variant="h6" align="left" color="textSecondary" paragraph className={classes.titleSlogan}>
						<Typography component="h3" variant="h3" color="textPrimary" gutterBottom display="block">
							Datamine Decentralized Community
						</Typography>
						<Typography variant="h6" color="textPrimary" gutterBottom>
							Datamine is a truly decentralized cryptocurrency. <strong>There are no "Official Social Channels"</strong> and all marketing is done by different communities around the world.

							All of the links listed here are different Datamine communities ran by various groups.
						</Typography>
						<Typography variant="h6" color="textPrimary">
							Most popular communities &amp; websites are listed first. <strong>Please stay safe &amp; never share your private keys!</strong>
						</Typography>

					</Typography>
				</Container>
			</Box>

			<Box mb={6}>
				<Paper className={classes.paperBorders}>
					<Box py={3}>
						<Container>
							<Box mb={6}>
								{getSocialPoints()}
							</Box>
						</Container>
					</Box>
				</Paper>
			</Box>
			<Box my={6}>
				<Container>
					<Typography variant="h6" align="left" color="textSecondary" paragraph className={classes.titleSlogan}>
						<Typography display="inline" variant="h6" color="textPrimary">
							Want your community listed here? Reach out to one of the existing communities in the list and you can join our decentralization efforts.
						</Typography>
					</Typography>
				</Container>
			</Box>
		</Box>

		<FooterFragment />
	</>
})

interface Props { }

const CommunityPage: React.FC<Props> = ({ }) => {
	const { state: web3State, dispatch } = useContext(Web3Context)

	return <Render
		dispatch={dispatch}
	/>
}

export default CommunityPage