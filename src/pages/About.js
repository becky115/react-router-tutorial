import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
	console.log(location)
	const query = queryString.parse(location.search); //문자열된 쿼리를 객체 형태로 파싱
	console.log(query);

	const { color, bool, number } = query;

	if(bool === 'true') {

	}

	if(parseInt(number) > 10) {

	}
	
	console.log({color});
	return (
		<div>
			<h2 style={{color}}>introduce</h2>
			<p>
				Hello, I am {match.params.name}
			</p>
		</div>
	)
};

export default About;