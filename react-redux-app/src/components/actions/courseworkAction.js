import { GET_COURSEWORK } from '../actions/types';

 

export const getCoursework = (value) => dispatch => {
    console.log('FETCH COURSEWORK...');
    console.log('Contact ID: ' + value);
    const token = "eyJraWQiOiJnYWZnckUrNFUwYkRGNFVxXC9qemlubzZITG05T1Y1Qmk5UmZNdEQrWGVLcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiRm5tZHVBbGlLdFRMYTVoM3FCaURMdyIsInN1YiI6ImFkYmE4MjUwLWQ1NzctNDUxMi1iYTU5LTc5YjFjZjM3N2I5NSIsImF1ZCI6IjNubnNqbHRyMGxwMnBwZzFnOHI0Ym1pZGNmIiwiY29nbml0bzpncm91cHMiOlsidXMtZWFzdC0xX21adHpld1lZTV9sb2dpbiJdLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiJKQkxBQ0siLCJwcm92aWRlck5hbWUiOiJsb2dpbiIsInByb3ZpZGVyVHlwZSI6IlNBTUwiLCJpc3N1ZXIiOiJodHRwczpcL1wvbG9naW50ZXN0LmV4Y2Vsc2lvci5lZHVcL3NpbXBsZXNhbWxcL3NhbWwyXC9pZHBcL21ldGFkYXRhLnBocCIsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjIxNjI3NDAyMDM3In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYyMTYyNzQwMiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbVp0emV3WVlNIiwiY29nbml0bzp1c2VybmFtZSI6ImxvZ2luX0pCTEFDSyIsImV4cCI6MTYyMTk1Mzk4MywiaWF0IjoxNjIxOTUwMzgzfQ.ouuiP1zSDfBXMml3ZCf1TKHTX6p4do_ORUFRNTner_sd0Z4NqpRFxb27qkq58eFLUwg1KWiku5tzDOqOAa_i0mXe1yIo79nNqXPlSeoMSAX2JciB48M4_Wi7LMfJAb20WwnAOrVBOWeCpiKmy0CnCe7mRfEd7Ykh0qO2xik27nAumzI4_L3F8PJTWKJDtu407_dJSqP6AmEjQpIgvFa8dYiezC6V6v01l0gFARiFijUh-WNUzJo1ZW02MTJOlWd_5HPxF40YpbkCySe_wUN2EdtZnJNWpxNOUycZzeKG0a3uxu99MVcDwrTjZ3UXLyO8oe242BkKyPOnflDHUxyNEQ";
    fetch(`https://9cyv7bdpm4.execute-api.us-east-1.amazonaws.com/r/coursework/${value}`,
    {
        method: 'GET',
        headers: {
            'origin': 'https%3A;%2F;%2F;sisdev.int.excelsior.edu',
            'Content-Type': 'application/json',
            'Host': '9cyv7bdpm4.execute-api.us-east-1.amazonaws.com',
            'Authorization': 'BEARER ' + token,
        }
    })
    .then(res => res.json())
    .then(coursework => dispatch({
        type: GET_COURSEWORK,
        payload: coursework
    }));
}