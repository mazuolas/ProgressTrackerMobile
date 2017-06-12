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
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20
}

export const topProfile = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 5
}

export const strikeRow = {
  flexDirection: 'row',
  margin: 1
}

export const day = {
  backgroundColor: '#ffcccc',
  fontSize: 18,
  color: '#C00A0A',
  flex: 1,
  marginRight: 5,
  textAlign: 'center',
  fontWeight: 'bold'
}

export const note = {
  fontWeight: 'bold',
  backgroundColor: '#ffcccc',
  fontSize: 18,
  color: '#C00A0A',
  flex: 4,
  textAlign: 'center'
}

export const strikeList = {
  height: '40%'
}
