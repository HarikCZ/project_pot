import React from "react";

import { Grid, setRef } from '@material-ui/core'

import { Tile } from './flowertile';

import {useState, useEffect} from 'react'

import Link from 'next/link'

import { 
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBSFJrOKaTr2n9d0Avp3EluZ9wV5IZ2i0s",
    authDomain: "project-pot-e8a0a.firebaseapp.com",
    projectId: "project-pot-e8a0a",
    storageBucket: "project-pot-e8a0a.appspot.com",
    messagingSenderId: "792344260857",
    appId: "1:792344260857:web:cc320fd22a5675c4123228"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const FlowerGrid = () => {
    
    const [flowers, setFlowers] = useState()
    const [refreshToken, setRefreshToken] = useState(Math.random())

        useEffect(() => {

            const db = getFirestore()

            //collection ref
            const colRef = collection(db, 'jake')

            getDocs(colRef)
            .then((snapshot) => {

            let flowerpots = []

            snapshot.docs.forEach((doc) => {
                flowerpots.push({ ...doc.data() })
            })
            
            setTimeout(() => setRefreshToken(Math.random()), 3000);

            console.log(flowerpots)
            setFlowers(flowerpots)
        }) 
    }, [refreshToken])
    
    async function getStaticProps() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return { props: { data } };
    }

    return<>
        <Grid container spacing={3} alignItems={"center"}>
            {flowers ?.map((kytka) => 
                <Grid item xs={4} alignItems={'center'}>
                    <Link href='/flowerdetail'>
                        <Tile data={kytka}/> 
                    </Link>
                </Grid>    
            )}
            
            
            {/* {JSON.stringify(flowers)} */}

                
        </Grid>
    </>
} 



