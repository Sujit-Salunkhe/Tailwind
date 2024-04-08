import styled from 'styled-components'


export const  Container = styled.div`
display:flex;
flex-direction:column;
input {
    width:500px;
    height:50px;
    font-size:20px;
    margin:10px;
    
}
button {
    width:100px;
    height:50px;
    margin:10px;
    display:flex;
    justify-content:center;
    align-items:center;
}
`


export const MapContainer = styled.div`
width:500px;
height:50px;
display:flex;
justify-content: space-between;
align-items:center;
// border:2px solid red;
margin : 10px 10px;
font-size:20px;

button {
    width:100px;
    height:50px;
}
`

export const InputContainer = styled.div`
display:flex;
justify-content :center;
align-items:center;
// margin-left:10px;

`