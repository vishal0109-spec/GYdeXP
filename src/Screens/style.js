import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    marginTop: hp(2.5),
    justifyContent: 'space-between',
    paddingLeft: wp(5),
    paddingRight: wp(5),
    alignItems: 'center',
  },
  header2: {
    marginTop: hp(2),
    alignItems: 'center',
  },
  header2Txt: {
    color: '#181725',
    fontSize: hp(2.2),
    fontWeight: 'bold',
  },
  logo: {
    width: hp(6),
    height: hp(2),
  },
  bell: {
    width: hp(1.6),
    height: hp(1.75),
  },
  searchBar: {
    marginLeft: wp(5),
    width: wp(90),
    height: hp(6.3),
    marginTop: hp(2),
    backgroundColor: '#F2F3F2',
    borderRadius: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: hp(2.1),
    height: hp(2.1),
    marginLeft: wp(5),
  },
  searchIconTxt: {
    fontSize: hp(1.7),
    fontWeight: '400',
    marginLeft: wp(4),
  },
  customBottom: {
    height: hp(8.3),
  },
  categoryList: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  categoryCard: {
    flex: 1,
    margin: wp(2),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(3),
  },
  categoryImage: {
    width: wp(20),
    height: wp(20),
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: '#181725',
    marginTop: hp(1),
    textAlign: 'center',
  },
});
