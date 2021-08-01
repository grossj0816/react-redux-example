import { program } from '@babel/types';
import React from 'react';
import { useEffect, useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCoursework } from './actions/courseworkAction';



const Header = (props) => {
    const studentProfile = useSelector(state => state.coursework.items);
    const dispatch = useDispatch();
    const {contactID} = props;

    
    useEffect(() =>{
        //when component mounts on the screen
            dispatch(getCoursework(contactID));

        return() => {
            //when component unmounts do this..
            console.log("unmounting...");
        }

    }, [])
    //props.getCoursework(contactID);
    let profile = new Object();
     profile = studentProfile['studentProfile'];
    console.log(JSON.stringify(profile));
    // console.log("Student Profile" + JSON.stringify(profile));
    // let coursework = props.coursework["studentProfile"];
    // let studentProfile = coursework;
    if(profile != null)
    {
        return(

            <li>
                <ul>Contact ID: {profile.contactId}</ul>
    
                <ul>First Name: {profile.firstName}</ul>
                <ul>Program Code: {profile.svcProgramCode}</ul>
                <ul>Best Degree: {profile.bestDegree}</ul>
                <ul>Date of Birth: {profile.dob}</ul>
                <ul>Former Names: {profile.formerNames}</ul>
            </li>
        );
    }
    return(
        <li>
        <ul>Contact ID: {}</ul>

        <ul>First Name: {}</ul>
        <ul>Program Code: {}</ul>
        <ul>Best Degree: {}</ul>
        <ul>Date of Birth: {}</ul>
        <ul>Former Names: {}</ul>
    </li>
    )


}




export default Header;