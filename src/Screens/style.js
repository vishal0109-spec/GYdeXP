import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F17',
  },
  sucessContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: hp(2.5),
    justifyContent: 'space-between',
    paddingLeft: wp(5),
    paddingRight: wp(5),
    alignItems: 'center',
  },
  logo: {
    width: hp(10),
    height: hp(4.5),
  },
  bell: {
    width: hp(2.6),
    height: hp(2.6),
  },
  searchBar: {
    marginLeft: wp(5),
    width: wp(90),
    height: hp(6.3),
    marginTop: hp(3),
    backgroundColor: '#383838',
    borderRadius: wp(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: hp(2.1),
    height: hp(2.1),
    marginLeft: wp(5),
    tintColor: '#ECECEC',
  },
  searchIconTxt: {
    fontSize: hp(1.7),
    fontWeight: '400',
    marginLeft: wp(4),
  },
  line: {
    marginLeft: wp(5),
  },
  gyde: {
    width: wp(34),
    backgroundColor: '#0C0F17',
    height: hp(4.8),
    borderRadius: wp(6),
    marginLeft: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  gyde2: {
    width: wp(34),
    backgroundColor: '#25262A',
    height: hp(4.8),
    borderRadius: wp(6),
    marginLeft: wp(5),
    marginTop:hp(1.8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  clock: {
    width: hp(1.75),
    height: hp(1.75),
  },
  gydeTxt: {
    color: '#FFFFFF',
    fontSize: hp(1.7),
    fontWeight: '500',
  },
  downBtn: {
    width: hp(1.8),
    height: hp(1.3),
  },
  tripContainer: {
    marginTop: hp(3),
    marginLeft: wp(5),
  },
  heading: {
    fontSize: hp(1.8),
    lineHeight: hp(2.3),
    fontWeight: '500',
    marginBottom: hp(2),
    color: '#FFFFFF',
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: wp(3),
    overflow: 'hidden',
  },
  image: {
    width: hp(13),
    height: hp(9.5),
    resizeMode: 'cover',
    borderRadius: wp(5),
    zIndex: 0,
  },
  gydeImage: {
    width: hp(40),
    height: hp(22.5),
    resizeMode: 'cover',
    borderRadius: wp(4),
    alignItems: 'center',
    marginRight: wp(3),
    overflow: 'hidden',
  },
  title: {
    fontSize: hp(1.5),
    fontWeight: '400',
    lineHeight: 15,
    color: '#FFFFFF',
    marginLeft: wp(2),
    marginTop: hp(-4),
    zIndex: 1,
  },
  tripTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(-15),
  },
  icon: {
    width: 10,
    height: 10,
    marginTop: hp(-4),
    marginLeft:wp(2)
  },
  largeItemContainer:{
    width:wp(49),
    height:hp(18),
    backgroundColor:'#FFFFFF',
    marginRight:wp(3),
    borderRadius:wp(3),

  },
  largeImage:{
    width:wp(46),
    height:hp(11),
    borderRadius:wp(2),
    alignSelf:'center',
    marginTop:hp(0.6)
  },
  tripLocation:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:hp(-3)
  },
  icon2: {
    width: 8,
    height: 10,
    tintColor:'#EDC16A',
    marginLeft:wp(4)
  },
  locationText:{
   color:'#EDC16A',
   marginLeft:wp(1.7),
   fontSize:hp(1.5),
   fontWeight:'400',
   lineHeight:hp(1.7)
  },
  largeTitle:{
    color:'#0C0F17',
    fontSize:hp(1.6),
    marginLeft:wp(2.5),
    marginTop:hp(1.3),
    fontWeight:'400'
  },
  memoryContainer:{
    flexDirection:'row',
    marginTop:hp(0.9),
    marginLeft:wp(2.5),
  },
  memoryContainer2:{
    backgroundColor:'#EDC16A',
    width:wp(21),
    height:hp(2.5),
    borderRadius:wp(5.5),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  memoriesText:{
    color:'#0C0F17',
    fontSize:hp(1.3),
    fontWeight:'300'
  },
  priceText:{
    color:'#0C0F17',
    fontSize:hp(1.4),
    textAlign:'center',
    marginLeft:wp(4)
  },
  featuredItemContainer:{
    width:wp(77),
    height:hp(22),
    marginRight:wp(4),
    borderRadius:wp(5),
    
  },
  featuredImage:{
    width:wp(77),
    height:hp(22),
    borderRadius:wp(5),
  },
  featuredTitle:{
    position:'absolute',
    top:110,
    left:10,
    color:'#FFFFFF',
    fontWeight:'400',
    fontSize:hp(1.7)
  },
  featuredDescription:{
    position:'absolute',
    top:125,
    left:10,
    color:'#8C8C8C',
    fontWeight:'300',
    fontSize:hp(1.7)
  },
  customBottom:{
    position:'absolute',
    backgroundColor:'#161616',
    bottom:hp(1.5),
    left:wp(6),
    height:hp(8.3),
    elevation:5,
    width:wp(90),
    borderRadius:wp(7),
    borderColor:'#161616'
  },
  backIcon:{
    width:hp(6.5),
    height:hp(6.5),
    backgroundColor:'#0C0F17',
    position:'absolute',
    borderRadius:hp(6.5)/2,
    top: hp(4.5),
    left: wp(5),
    zIndex:10,
    alignItems:'center',
    justifyContent:'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  editModalContainer: {
    position: 'absolute',
    bottom: 0,
  },
  editModal: {
    width: wp(100),
    height: hp(29),
    borderTopLeftRadius: hp(3.8),
    borderTopRightRadius: hp(3.8),
    backgroundColor: '#0C0F17',
    
  },
  editModal2: {
    width: wp(100),
    height: hp(47),
    borderTopLeftRadius: hp(3.8),
    borderTopRightRadius: hp(3.8),
    backgroundColor: '#0C0F17',
  },
  headerBarStyle: {
    width: wp(20),
    height: hp(0.5),
  },
  headerBar: {
    alignSelf: 'center',
    marginTop: hp(1.3),
  },
  thngContainer:{
    width:wp(90),
    marginTop: hp(2.2),
    marginLeft:wp(5),
    borderWidth:1,
    borderColor:'#EDC16A',
    height:hp(6.4),
    borderRadius:wp(4),
    flexDirection:'row'
  },
  loctt:{
    width:hp(2),
    height:hp(2.4),
    marginLeft:wp(5),
    marginTop:hp(2.1)
  },
  thngTxtContainer:{
    marginLeft:wp(6),
    justifyContent:'center'
  },
  yourTxt:{
    fontSize:hp(1.6),
    fontWeight:'400',
    lineHeight:hp(2.5),
    color:'#FFFFFF'
  },
  avblTxt:{
    fontSize:hp(1.4),
    color:'#FFFFFF',
    opacity:0.5,
    fontWeight:'300'

  },
  searchBtnContainer:{
    width:wp(100),
    height:hp(8.75),
    marginTop:hp(3),
    borderWidth:0.5,
    borderTopColor:'#25262A',
    justifyContent:'center',
    alignItems:'center'
  },
  searchBtn:{
    width:wp(90),
    backgroundColor:'#EDC16A',
    height:hp(6.3),
    borderRadius:wp(3),
    justifyContent:'center',
    alignItems:'center'
  },
  searchBtnTxt:{
    fontSize:hp(1.5),
    color:'#000000',
    fontWeight:'400'
  },
  markerView:{
    width:hp(4.25),
    height:hp(4.4),
    backgroundColor:'#FFFFFF',
    borderRadius:hp(4.5)/2,
    alignItems:'center',
    justifyContent:'center'
  },
  markerImage:{
    width:hp(3.4),
    height:hp(3.4), 
  },
  done:{
    width:hp(10),
    height:hp(10),
    marginBottom:hp(3)
  },
  bookedText:{
    color:'#0C0F17',
    fontSize:hp(2.5),
    fontWeight:'400',
    marginBottom:hp(1.5)
  },
  thnkText:{
    width:wp(76),
    color:'#656565',
    textAlign:'center',
    fontWeight:'400',
    fontSize:hp(1.8),

  },
  redirectText:{
    width:wp(76),
    color:'#656565',
    textAlign:'center',
    fontWeight:'400',
    fontSize:hp(1.8),
    marginTop:hp(3)
  },
  backButton:{
    backgroundColor:'#EDC16A',
    width:wp(30),
    height:hp(5),
    alignItems:'center',
    justifyContent:'center',
    borderRadius:wp(3),
    marginTop:hp(3)


  }
});
