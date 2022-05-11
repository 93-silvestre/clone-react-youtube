import React from 'react'

import { makeStyles, AppBar, Toolbar, Button, IconButton, Drawer, Box, ListItem, List, ListItemIcon, ListItemText, Divider, Typography, ListSubheader, Grid, Hidden, } from '@material-ui/core';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';



import VideoCall from '@mui/icons-material/VideoCall';
import Apps from '@mui/icons-material/Apps';
import MoreVert from '@mui/icons-material/MoreVert';


import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';






const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        
    },
    appbar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1, /*para colocar menu lateral, atrás da nav principal */
    },
    logo: {
        height: 25,

    },

    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },

    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)

    },
    icons: {
        paddingRight: theme.spacing(5),


    },
    grow: {
        flexGrow: 1,
    },
    listItemText: {
        fontSize: 14, // tamanho do text na navlateral

    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,

    },
    subheader: {
        textTransform: 'uppercase',


    },


}));

const videos = [
    {
        id: 1,
        title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.png',
    },
];

function Home() {
    const classes = useStyles();
 

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuIcon}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>

                    <img src='/images/branco.png' alt='logo' className={classes.logo}></img>
                    
                 

                    <div className={classes.grow} /> {/* grow para espaçar menu do botão*/}

                    <IconButton className={classes.icons} >
                        <VideoCall />
                    </IconButton>

                    <IconButton className={classes.icons} >
                        <Apps />
                    </IconButton>

                    <IconButton className={classes.icons} >
                        <MoreVert />
                    </IconButton>
                    <Button variant="outlined" color='secondary' startIcon={<AccountCircleRoundedIcon />}>
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display='flex' >

                <Hidden mdDown> {/* Componente para ocultar responsivamente os itens compostos nela */}
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{ paper: classes.drawerPaper }}
                    >
                        <Toolbar />
                        <div className={classes.drowerContainer}>

                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Inicio'} />

                                </ListItem>

                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<LocalFireDepartmentIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Em Alta'} />

                                </ListItem>

                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Inscrições'} />

                                </ListItem>

                            </List>



                            <Divider />

                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Biblioteca'} />

                                </ListItem>

                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Histórico'} />

                                </ListItem>

                            </List>
                            <Divider />

                            <Box p={7}>
                                <Typography variant="body2">
                                    Faça login para curtir vídeos,
                                    comentar e se inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button variant="outlined" color='secondary' startIcon={<AccountCircleOutlinedIcon />}>
                                        Fazer Login
                                    </Button>

                                </Box>
                            </Box>

                            <Divider />

                            <Box p={2}>
                                <ListSubheader
                                    component='div'
                                    id='nested-list-subheader'
                                    className={classes.subheader}
                                >
                                    O MELHOR DO YOUTUBE
                                </ListSubheader>
                                <List>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Musica'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Esportes'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Jogos'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Filmes'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Nóticias'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Ao vivo'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Aprender'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Vídeos do momento'} />

                                    </ListItem>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.listItemText,
                                            }}
                                            primary={'Vídeo em 360°'} />

                                    </ListItem>
                                </List>

                            </Box>
                            <Divider />

                        </div>
                    </Drawer>
                </Hidden>
                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados

                    </Typography>

                    <Grid container spacing={3}>
                        { //loop para os videos
                            videos.map((item, index) => (
                                // para responsividade
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>

                                        <img //imagem
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography //titulo do video
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography // canal
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>


                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}

                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>

        </div>

    );
};

export default Home;


