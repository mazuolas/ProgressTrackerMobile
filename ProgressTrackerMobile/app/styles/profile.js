import { Dimensions } from 'react-native';

const dim = Dimensions.get('window')

export const logoutButtonStyle ={
  backgroundColor: 'blue',
  position: 'absolute',
  width: dim.width,
  top: dim.height - 90,
  justifyContent: 'center',

}

export const strikes = {
    backgroundColor: '#ffcccc',
    textAlign: 'center',
    color: '#C00A0A',
    marginTop: 20,
    margin: 10,
    marginBottom: 5,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20
}

export const topProfile = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: 15,
  padding: 10
}

export const strikeRow = {
  flexDirection: 'row',
  alignItems: 'center'
}

export const day = {
  backgroundColor: '#ffcccc',
  fontSize: 15,
  color: '#C00A0A',
  flex: 1,
  marginRight: 5,
  marginLeft: 10,
  textAlign: 'center',
  padding: 5
}

export const note = {
  fontWeight: 'bold',
  backgroundColor: '#ffcccc',
  fontSize: 15,
  color: '#C00A0A',
  marginRight: 10,
  flex: 4,
  textAlign: 'left',
  padding: 5
}

export const strikeList = {
  height: '40%'
}
