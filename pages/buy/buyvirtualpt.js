import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout';
import UserList from '../../components/UserList';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {FirebaseConfig} from '../../utils/FirebaseConfig';
import TopLogoImage from '../../components/TopLogoImage';
import { Typography, Grid, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import styles from '../../components/layout.module.css';

const firebase = FirebaseConfig();

const styles = theme => ({
    container: {
        width: '100%',
        // maxWidth:'1080px',
        justifyContent:'center', 
        alignItems:'center', 
        display:'flex', 
        flexDirection:'column',
        // backgroundColor: "#fcebbe",
    },
    topContainer:{
        // width: screenWidth*0.9,
        justifyContent:'center', 
        alignItems:'center', 
        display:'flex', 
        flexDirection:'column',
        backgroundColor: "#fcebbe",
        paddingBottom: theme.spacing.unit * 5,

    },
    secondContainer:{
        width: '100%',
        justifyContent:'center', 
        alignItems:'center', 
        display:'flex', 
        flexDirection:'column',
        paddingBottom: theme.spacing.unit * 5,
        paddingTop: theme.spacing.unit * 3,
    },
    keyInDetailscontainer:{
        width: '100%',
        justifyContent:'center', 
        alignItems:'center', 
        display:'flex', 
        flexDirection:'column',
        backgroundColor: "#fcebbe",
        flex:1,
    },

    boldMontSerrat:{
        color:'#464646', 
        fontFamily: "Montserrat",
        // fontFamily :'sans-serif', 
        fontWeight: 800,
        textTransform: "uppercase",
    },
    smallMontSerrat:{
        color:'#464646', 
        fontFamily: "Montserrat",
        fontWeight: 400,
        textAlign:'center', marginLeft:'10%', marginRight:'10%', marginTop:10, letterSpacing:1
        // textTransform: "uppercase",
    },
    mainImgClass:{
        alignItems:'center', justifyContent:'center', width:'90%', maxWidth:'600px', maxHeight:'750px', resizeMode: 'stretch', boxShadow: '0px 4px 10px 8px rgba(0, 0, 0, 0.2), 0px 1px 20px 8px rgba(0, 0, 0, 0.3)', borderRadius: 15
    },
    bottomImgClass:{
        alignItems:'center', justifyContent:'center', width:'100%', resizeMode: 'stretch', marginTop:20
    },
    buttonStyle:{
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop:1,
        paddingBottom:1,
        alignItems:'center', justifyContent:'center',
        // minWidth: 100,
        // border: '1.5px solid white',
        borderRadius: 30,
        // boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },
    boxContainer:{
        // paddingLeft: '5%',
        // paddingRight: '5%',
        padding:'2%',
        backgroundColor: "#fcebbe",
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        // marginLeft:'6%',
        // marginRight:'5%',
        // marginLeft:5,
        // marginRight:5,
        // width:'90%',
        width: screenWidth * 0.85,
        height: screenWidth * 0.22,
        boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },
    fontTermNCond: {
        marginBottom:7, color:'rgba(0, 0, 0, 0.54)'
    },
    card: {
      paddingBottom: theme.spacing.unit * 10
    },
    content: {
      // maxWidth: 8 * 50,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    termNConditionContainer:{
        maxWidth:screenWidth * 0.9,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    contentInner: {
      maxWidth: 8 * 50,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      backgroundColor: "#fde298",
      color: '#062845',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 2,
      minHeight: 36,
      minWidth: 88,
      width: '100%',
      boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      justifyContent: 'flexEnd'
    },
    buttonLarge: {
      fontSize: "1.5rem",
      textTransform: "capitalize",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      backgroundColor: "#fde298",
      color: '#062845',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 2,
      minHeight: 36,
      minWidth: 88,
      width: '100%',
      maxWidth:600,
      boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      justifyContent: 'flexEnd'
    },
    buttonRed: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      backgroundColor: "#F71A38",
      color: '#fff',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 2,
      minHeight: 36,
      minWidth: 88,
      width: '100%',
      boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      justifyContent: 'flexEnd'
    },
    buttonDisabled: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      backgroundColor: "#ccc",
      color: '#fff',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 2,
      minHeight: 36,
      minWidth: 88,
      width: '100%',
      boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      justifyContent: 'flexEnd'
    },
    red: {
      color: 'red',
      // backgroundColor:'red',
    },
    media: {
      // height: 0,
      // paddingTop: '56.25%', // 16:9
      width: 256,
      height: 256,
      marginRight: 'auto',
      marginLeft: 'auto'
    },
    snackbarMessage: {
      textAlign: 'center',
      flex: 1,
      fontSize: '1.3125rem',
      padding: theme.spacing.unit * 2
    },
    snackbarRoot: {
      backgroundColor: 'rgba(6,40,69,0.96)'
    },
    fileInput: {
      display: 'none'
    },
    quantityInput:{
      fontSize: '2rem',
      alignItems: 'center'
    },
    formControl: {
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: 88,
      width: '100%',
      // paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 2,
      minHeight: 36,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      justifyContent: 'flexEnd'
    },
    
  });

  const vBuyVirtualTrainerKLCCTier1 = '2b3680b6-0c48-3e9f-fb88-e5b7827d046f';
  const vBuyVirtualTrainerKLCCTier2 = '2bbc5ceb-d5fb-ae53-4805-06025dbef4bd';
  const vBuyVirtualTrainerKLCCTier3 = '6567972e-d12e-b51a-76cf-9972d47d54d2';

  const vBuyVirtualTrainerTTDITier1 = 'cad41465-ee59-6e76-ffff-bc9de7f2cbe7';
  const vBuyVirtualTrainerTTDITier2 = '097fcccd-3f5b-884e-be8e-345dfd96c3dd';
  const vBuyVirtualTrainerTTDITier3 = '149f61ab-8c8a-aa66-cc9c-3e6d62449596';

  const trainerKLCCTier1 = ['SHAUN C', 'SOFIA', 'KUANG JIN', 'RISHON', 'BRYAN', 'EVON'];
  const trainerKLCCTier2 = ['CRAWFORD'];
  const trainerKLCCTier3 = ['TONY'];

  const trainerTTDITier1 = ['ADAM V', 'NAIM', 'KENNETH', 'FADLY', 'SONIYAH', 'REN KAI'];
  const trainerTTDITier2 = ['MING SHAO', 'QHALID', 'DELPHINE'];
  const trainerTTDITier3 = ['SEAN LIM', 'HANNA', 'KISH'];

class buyvirtualpt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            phone: '',
            icnumber: '',
            className: '',
            classDate: '',
            dialogOpen: false,
            checked:false,
            refSource: null,
            mcId: null,
      
            mainImgUrl:null,
            bottomImgUrl:null,
            showSelection:true,
            showKLCC:true,
            showTTDI:false,
            showTermNCondition:false,
            showKeyInDetails:false,
            showLoading:false,
            isMobile: false,
            vendProductId: null,
            showErrorDialog:false,
        };
    }


    componentDidMount(){
      
    }

    handleChange = name => event => {
        var updatedState = {};
        var value = event.target.value;
        if(name === 'quantity' && value < 1){
          value = 1;
        }else if(name === 'checked'){
          value = event.target.checked;
        }
        // else if (name === 'checkedPromo'){
        //   value = event.target.checked;
        //   //console.log('thecheckedValue: ', value);
        // }
        updatedState[name] = value;
        this.setState({ ...updatedState
        });
      }
    handlePress = (text = null) => {
        // this.props.actions.buyVT(text);
        if(text === 'KLCC') this.setState({showKLCC:true, showTTDI:false, showSelection:false})
        else if (text === 'TTDI') this.setState({showKLCC:false, showTTDI:true, showSelection:false});

        // this.scrollTo(900);
    }

    renderButton(){
        const {classes} = this.props;
        // const {selectedAvatar, email, name, selectedAngPowCover} = this.state;
        const {isMobile} = this.state;
        const bgColorSelected = '#fcebbe';
        const bgColorNotSelected = '#fff';
        // console.log('getScrollPosition: ', window.pageYOffset);

        return(
            <div style = {{alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'row', marginTop:20}}>
                <div 
                    className={styles.buttonStyle}
                    style = {{cursor: 'pointer', marginRight:50, 
                        backgroundColor: this.state.showKLCC? bgColorSelected:bgColorNotSelected,
                        border: '2px solid white',
                        borderColor: this.state.showKLCC? bgColorNotSelected:bgColorSelected,
                        width: isMobile? '6rem':'9rem',
                    }}
                    onClick = {()=>this.handlePress('KLCC')}
                    >
                    <p className={styles.boldMontSerrat} style={{textAlign:'center', fontSize:isMobile? '1.3rem':'2rem', verticalAlign:'center', lineHeight:'1rem'}}>KLCC</p>
                </div>
                <div 
                    className={styles.buttonStyle}
                    style = {{cursor: 'pointer', 
                        backgroundColor: this.state.showTTDI? bgColorSelected:bgColorNotSelected,
                        border: '2px solid white',
                        borderColor: this.state.showTTDI? bgColorNotSelected:bgColorSelected,
                        width: isMobile? '6rem':'9rem'
                    }}
                    onClick = {()=>this.handlePress('TTDI')}
                    >
                    <p className={styles.boldMontSerrat} style={{textAlign:'center', fontSize:isMobile?'1.3rem':'2rem', verticalAlign:'center', lineHeight:'1rem'}}>TTDI</p>
                </div>
            </div>
        )
    }

    renderShowSelection () {
        const {classes} = this.props;
        const {mainImgUrl, isMobile} = this.state;

        const buyLabel1 = `Don't let the MCO side-track your fitness goals. Your home, our Personal Trainers; we'll bring Babel to you!`;
        const buyLabel2 = 'Introducing our Virtual Personal Training from only RM260!';
        const buyLabel3 = `What's included:`;
        const buyLabel4 = `FIVE (5) Virtual Personal Training sessions`;
        const buyLabel5 = `*ONE FREE MONTH (1) on your Babel membership`;
        const tncText = `*Terms & conditions apply`;

        return(
            <div style = {{maxWidth:'1080px'}}>
                <div className={styles.topContainer}>
                    <TopLogoImage/>
                    <p
                        className={styles.boldMontSerrat}
                        style={{textAlign:'center', marginBottom:30, marginTop:10, letterSpacing:1, marginLeft:20, marginRight:20}}
                    >{'PROGRESSION IN ISOLATION'}
                    </p>
                    <div style = {{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
                        <img src = {mainImgUrl} className={styles.mainImgClass}/>               
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <Typography type="title" component="h1" color="primary" 
                        className={styles.boldMontSerrat}
                        style={{textAlign:'center', marginBottom:30, marginTop:10, letterSpacing:1, marginLeft:20, marginRight:20}}
                    >{'VIRTUAL PERSONAL TRAINING'}
                    </Typography>
                    <Typography type="subheading" component="h1" color="primary" className={styles.smallMontSerrat}>{buyLabel1}</Typography>
                    <Typography type="subheading" component="h1" color="primary" className={styles.smallMontSerrat}>{buyLabel2}</Typography>
                    <Typography type="subheading" component="h1" color="primary" className={styles.smallMontSerrat}>{buyLabel3}</Typography>
                    <ul>
                        <li className={styles.smallMontSerrat}> <span>{buyLabel4}</span></li>
                        <li className={styles.smallMontSerrat}>{buyLabel5}</li>
                    </ul>
                    <Typography type="body2" component="h1" color="primary" className={styles.smallMontSerrat} style={{fontWeight: 400, fontStyle: 'italic'}}>{tncText}</Typography>
                    {this.renderButton()}
                </div> 
            </div>
        );
    }

    handleCheckBox = name => event => {
        this.setState({[name]: event.target.checked });
    };

    handleConfirm = () => {
        const invalidSelectedTrainerText= `Oops!, Error: Please pick any trainer.`

        if (!this.state.selectedTrainer){
            this.setState({showErrorDialog:true, errorMessage:invalidSelectedTrainerText});
            return;
        }
        this.setState({showKeyInDetails:true});
        // this.scrollTo(0);
    }

    onTrainerBtnPress = (name) => {
        // console.log('onTrainerBtnPressName: ', name);
        if (trainerKLCCTier1.includes(name)){this.setState({vendProductId:vBuyVirtualTrainerKLCCTier1})}
        else if (trainerKLCCTier2.includes(name)){this.setState({vendProductId:vBuyVirtualTrainerKLCCTier2})}
        else if (trainerKLCCTier3.includes(name)){this.setState({vendProductId:vBuyVirtualTrainerKLCCTier3})}
        else if (trainerTTDITier1.includes(name)){this.setState({vendProductId:vBuyVirtualTrainerTTDITier1})}
        else if (trainerTTDITier2.includes(name)){this.setState({vendProductId:vBuyVirtualTrainerTTDITier2})}
        else if (trainerTTDITier3.includes(name)){this.setState({vendProductId:vBuyVirtualTrainerTTDITier3})}
        this.setState({selectedTrainer: name});
    }

    renderTrainerBtnSelection(name = null){
        // console.log('renderTrainerBtnSelectionState: ', this.state);
        const {classes} = this.props;
        const {isMobile} = this.state;
        const bgColorSelected = '#fff';
        const bgColorNotSelected = '#fcebbe';
        // console.log('renderTrainerBtnSelectionName: ', name);
        // console.log('selectedTrainer: ', this.state.selectedTrainer);
        const isSelected = (name === this.state.selectedTrainer)? true:false;

        return(
            <div
                className={styles.buttonStyle}
                style = {{
                    cursor: 'pointer', 
                    backgroundColor: isSelected? bgColorSelected:bgColorNotSelected,
                    border: '1.5px solid white',
                    borderColor: isSelected? bgColorNotSelected:bgColorSelected,
                    margin:'2%',
                    paddingTop:'1%',
                    paddingBottom:'1%',
                    paddingLeft:'5%',
                    paddingRight:'5%',
                    width: isMobile? '4rem':'7.5rem'
                    // maxWidth:'30%'
                }}
                onClick = {()=>{if (name){this.onTrainerBtnPress(name)}}}
            >
                <Typography 
                    className={styles.boldMontSerrat}
                    type="subheading" component="h1" color="primary" noWrap={true}
                    style={{textAlign:'center', marginTop:0, marginBottom:0, fontSize:isMobile? '0.5rem':'1.1rem'}}>
                    {name? name: 'NOT AVAILABLE'}
                </Typography>
            </div>
        )  
    }

    renderKLCCSelection(){
        const {classes} = this.props;
        const {isMobile} = this.state;

        return(
            <div style={{alignItem:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                <Typography type="display2" component="h1" color="primary" 
                    className={styles.boldMontSerrat}
                    style={{textAlign:'center', marginBottom:30, marginTop:10, letterSpacing:1, fontSize:'3rem'}}
                >{'KLCC'}
                </Typography>
               
                    <div className={styles.boxContainer}>
                        <Typography 
                            className={styles.boldMontSerrat}
                            type="title" component="h1" color="primary" style={{marginLeft:20, marginBottom:0, fontSize:isMobile? '1rem':'1.3125rem'}}>
                        {'Tier 1 - RM260'}
                        </Typography>
                        <div style={{display:'flex', flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            {this.renderTrainerBtnSelection('SHAUN C')}
                            {this.renderTrainerBtnSelection('SOFIA')}
                            {this.renderTrainerBtnSelection('KUANG JIN')}
                        </div>
                        <div style={{display:'flex', flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            {this.renderTrainerBtnSelection('RISHON')}
                            {this.renderTrainerBtnSelection('BRYAN')}
                            {this.renderTrainerBtnSelection('EVON')}
                        </div>
                    </div>
                   
                    <div className={styles.boxContainer}
                        style = {{marginTop:20}}
                    >
                        <Typography 
                            className={styles.boldMontSerrat}
                            type="title" component="h1" color="primary" style={{marginLeft:20, marginBottom:0, fontSize:isMobile? '1rem':'1.3125rem'}}>
                        {'Tier X - RM400'}
                        </Typography>
                        <div style={{display:'flex', flex:1, flexDirection:'row'}}>
                            {this.renderTrainerBtnSelection('TONY')}
                        </div>
                    </div>
                   
             
                <Grid container spacing={24} direction="row" justify="center" alignItems="center" style = {{marginTop:20}}>
                    {!this.state.showKeyInDetails && this.renderConfirmButton()}
                </Grid>
               
            </div>
        )
    }

    renderConfirmButton(){
        const {classes} = this.props;
        const bgColorSelected = '#fcebbe';
        const bgColorNotSelected = '#fff';

        return(
            <div 
                className={styles.buttonStyle}
                style = {{
                    cursor: 'pointer', 
                    marginTop:20,
                    backgroundColor: this.state.showKeyInDetails? bgColorSelected:bgColorNotSelected,
                    border: '1.5px solid white',
                    borderColor: this.state.showKeyInDetails? bgColorNotSelected:bgColorSelected,
                    justifyContent:'center',
                    alignItems:'center',
                    width:'25%',
                }}
                onClick = {()=>this.handleConfirm()}
                >
                <p className={styles.boldMontSerrat} style = {{textAlign:'center'}}>{'CONFIRM'}</p>
            </div>
        );
    }

    renderShowKeyInDetails(){
        const {classes} = this.props;
        var {email, name, phone} = this.state;

        // console.log('renderShowKeyInDetailsState: ', this.state);

        const TextFieldEmail = <TextField id="email" label="Email*" fullWidth
            onChange={this.handleChange('email')} autoComplete='off' value={email} style={{marginBottom:8}}/>;

        const TextFieldName = <TextField id="name" label="Full Name (as stated in your IC/Passport) *" fullWidth
            onChange={this.handleChange('name')} autoComplete='off' value={name} style={{marginBottom:8}}/>;

        const TextFieldPhoneNum = <TextField id="phone" label="Phone Number *" fullWidth
            onChange={this.handleChange('phone')} autoComplete='off' value={phone} type='number'
            style={{marginBottom:8}}/>;

        return(
            <div className={styles.keyInDetailscontainer}>
                <div style = {{cursor: 'pointer', position: 'absolute', left:20, top:20}} onClick={()=>{this.setState({showKeyInDetails:false})}}>
                    <ArrowBackIcon style = {{width:'2rem', height:'2rem'}}/>
                </div>
                <TopLogoImage/>
                <Grid container spacing={24} direction="row" justify="center" alignItems="center" 
                    >
                    <div style = {{marginTop:20, backgroundColor:'#fff', borderRadius:20, margin:20, width:'80%', padding:20}}>
                        <Typography type="title" component="h1" color="primary" 
                            className={styles.boldMontSerrat}
                            style={{textAlign:'center', marginBottom:30, marginTop:20, letterSpacing:1}}
                        >{'FILL IN YOUR DETAILS'}
                        </Typography>
                        {TextFieldName}
                        {TextFieldEmail}
                        {TextFieldPhoneNum}
                        <Typography type="subheading" component="h1" color="primary" 
                            className={styles.boldMontSerrat}
                            style={{marginBottom:10, marginTop:40, letterSpacing:1}}
                        >{'Preferred Time of Training'}
                        </Typography>
                        <FormGroup row style={{}}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedAM}
                                    onChange={this.handleCheckBox('checkedAM')}
                                    value="checkedAM"
                                />
                                }
                                label="AM"
                                style={{marginRight:50}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedAM}
                                    onChange={this.handleCheckBox('checkedPM')}
                                    value="checkedPM"
                                />
                                }
                                label="PM"
                            />
                        </FormGroup>
                        <Typography type="subheading" component="h1" color="primary" 
                            className={styles.boldMontSerrat}
                            style={{marginBottom:10, marginTop:40, letterSpacing:1}}
                        >{'Preferred Days of Training'}
                        </Typography>
                        <FormGroup row style={{paddingBottom:20}}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedMon}
                                    onChange={this.handleCheckBox('checkedMon')}
                                    value="checkedMon"
                                />
                                }
                                label="Mon"
                                // style={{marginRight:50}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedTues}
                                    onChange={this.handleCheckBox('checkedTues')}
                                    value="checkedTues"
                                />
                                }
                                label="Tues"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedWed}
                                    onChange={this.handleCheckBox('checkedWed')}
                                    value="checkedWed"
                                />
                                }
                                label="Wed"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedThurs}
                                    onChange={this.handleCheckBox('checkedThurs')}
                                    value="checkedThurs"
                                />
                                }
                                label="Thurs"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedFri}
                                    onChange={this.handleCheckBox('checkedFri')}
                                    value="checkedFri"
                                />
                                }
                                label="Fri"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedSat}
                                    onChange={this.handleCheckBox('checkedSat')}
                                    value="checkedSat"
                                />
                                }
                                label="Sat"
                            />
                              <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedSun}
                                    onChange={this.handleCheckBox('checkedSun')}
                                    value="checkedSun"
                                />
                                }
                                label="Sun"
                            />
                        </FormGroup>
                    </div>
                </Grid>
                <FormGroup row style={{justifyContent:'center', marginLeft:30, marginRight:20}}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleChange('checked')}
                            value="checked"
                        />
                        }
                        label={(
                        <div>I agreed to the <a style={{textDecoration: 'underline'}} 
                            onClick={()=>this.handleViewTermsConditions()}>Terms & Conditions</a>
                        </div>)}
                    />
                </FormGroup>
                {this.renderBuyBtn()}
               
               
            </div>
        );
    }


    handleBuy = () =>{
        // console.log('handleBuyState: ', this.state);
        // const vendVirtualPTID = 'bb719703-58e5-1490-1fd5-f99cafb60333'; // testing

        const {name, phone, vendProductId, selectedTrainer} = this.state;
        const trainerName = selectedTrainer
        const lowerCaseEmail = this.state.email.toLowerCase();
        const emailMatch = lowerCaseEmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        var email = (emailMatch && emailMatch.length > 0) ? emailMatch[0] : this.state.email.toLowerCase();
        const isValidEmail = (emailMatch && emailMatch.length > 0) ? true : false;

        const invalidEmailTxt = 'Oops! Error: Email not valid. Please enter one that works :(';
        const invalidNameTxt = `Oops!, Error: Please enter full name.`
        const invalidPhoneTxt = `Oops!, Error: Please enter your phone number.`
        const invalidCheckedTncText= `Oops!, Error: Please tick on Term and Condition and Privacy Policy.`
        const invalidCheckedTimeText= `Oops!, Error: Please tick on AM or PM option.`
        const invalidCheckedDayText= `Oops!, Error: Please tick on the preferred day option.`

        // this.props.actions.addInvoiceForProduct(this.state.name, urlEmail || this.state.email, this.state.phone, vendProductIds);
        if (this.state.name.length<=3){
            this.setState({showErrorDialog:true, errorMessage:invalidNameTxt});
            return;
        }
        if (!isValidEmail){
            // ('invalid email');
            this.setState({showErrorDialog:true, errorMessage:invalidEmailTxt});
            return
        }
        if (this.state.phone.length<=3){
            this.setState({showErrorDialog:true, errorMessage:invalidPhoneTxt});
            return;
        }
        if (!this.state.checked){
            this.setState({showErrorDialog:true, errorMessage:invalidCheckedTncText});
            return;
        }
        if (!this.state.checkedAM && !this.state.checkedPM){
            this.setState({showErrorDialog:true, errorMessage:invalidCheckedTimeText});
            return;
        }
        if (!this.state.checkedMon && !this.state.checkedTues && !this.state.checkedWed && !this.state.checkedThurs && !this.state.checkedFri && !this.state.checkedSat && !this.state.checkedSun){
            this.setState({showErrorDialog:true, errorMessage:invalidCheckedDayText});
            return;
        }

        this.setState({showLoading:true});
        const selectedAMPM = {AM:this.state.checkedAM? this.state.checkedAM:false, PM:this.state.checkedPM?this.state.checkedPM:false};
        const selectedDay = {mon:this.state.checkedMon, tues:this.state.checkedTues, wed:this.state.checkedWed, thurs:this.state.checkedThurs, fri:this.state.checkedFri, sat:this.state.checkedSat, sun:this.state.checkedSun};
        console.log('buyState: ', this.state);

        const addInvoiceForProductVT = firebase.functions().httpsCallable('addInvoiceForProductVT');
        addInvoiceForProductVT({name, email, phone, vendProductId, trainerName, selectedAMPM, selectedDay}).then(invoiceRef=>{
            const invoiceId = invoiceRef.data;
            console.log('invoiceId: ', invoiceId);
            if(invoiceId){   
              const newPath = `/payments/${invoiceId}`;

               window.open(`/payments/${invoiceId}`);
                // if(getState().router.location.pathname !== newPath){
                // dispatch(push(newPath));
            }
        }).catch(error=>{
           console.error('error: ', error);
        });
    
        // this.props.actions.addInvoiceForVT('faizul', 'faizulklcc@babel.fit', '011192929292', vendVirtualPTID, trainerName, selectedAMPM, selectedDay);
        // this.props.actions.addInvoiceForVT(this.state.name, lowerCaseEmail, this.state.phone, this.state.vendProductId, this.state.selectedTrainer, selectedAMPM, selectedDay, (response)=>{
        // // this.props.actions.addInvoiceForVTHongKong(this.state.name, lowerCaseEmail, this.state.phone, this.state.vendProductId, this.state.selectedTrainer, selectedAMPM, selectedDay, (response)=>{ 
        //     console.log('response: ', response);
        //     if (response){
        //         this.setState({showLoading:false});
        //     }
        // });
    }

    renderBuyBtn(){
        const {classes} = this.props;
        const {isMobile} = this.state;
        return(
            <div 
                className={styles.buttonStyle}
                style = {{cursor: 'pointer',
                    backgroundColor: '#fff',
                    width:isMobile? '4.5rem':'8rem',
                    alignItems:'center', justifyContent:'center',
                    display:'flex', flexDirection:'row', marginTop:20, marginBottom:50
                    // border: '1.5px #solid white',
                    // borderColor: this.state.showKLCC? bgColorNotSelected:bgColorSelected
                }}
                onClick = {()=>this.handleBuy()}
                >
                <p className={styles.boldMontSerrat} style = {{textAlign:'center', fontSize: isMobile? '1rem':'1.5rem',}}>BUY</p>
            </div>
        )
    }

    render(){
        // console.log('users: ', this.state.users);
        console.log('theState: ', this.state);
        const {selectedUser, users} = this.state;

        return (     
            <div className={styles.container}>
                {!this.state.showLoading && !this.state.showKeyInDetails && this.renderShowSelection()}
                {!this.state.showLoading && !this.state.showKeyInDetails && this.state.showKLCC && this.renderKLCCSelection()}
                {!this.state.showLoading && this.state.showKeyInDetails && this.renderShowKeyInDetails()}
            </div>
        )
    }
 
}

export default buyvirtualpt;