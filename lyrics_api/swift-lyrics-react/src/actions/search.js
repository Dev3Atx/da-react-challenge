import React, { Component } from 'react';
import './App.css';
import { Button, Table } from 'reactstrap';
import axios from 'axios';

const api = axios.create({
	baseURL: 'da-react-challenge.herokuapp.com/swiftlyrics/lyric',
	responseType: 'json',
	timeout: 20000,
});

const getLyricRequest = (url: any) => api.get(url);

getLyricRequest('/lyric')
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	})
	.then(function () {
		// always executed
	});
