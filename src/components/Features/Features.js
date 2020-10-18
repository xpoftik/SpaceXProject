import React from 'react';
import RealaxWrapper from 'react-rellax-wrapper';
import './Features.css';

const images = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship'
  }

export default class Features extends React.Component
{ 
	constructor(props){
		super(props);
	}

	render() {
		return (
			<section className="features">
				<h2 className="features-title">
					{this.props.name} <br/>Overview
				</h2>
				<div className="overview">

					<table className="table">
						<caption className="table-title">
							Size
						</caption>
						<thead>
							<tr>
								<td className="table-column">HEIGHT</td>
								<td className="table-column">22.25 m / 73 ft</td>
							</tr>
							<tr>
								<td className="table-column">DIAMETER</td>
								<td className="table-column">1.68 m / 5.5 ft</td>
							</tr>
							<tr>
								<td className="table-column">MASS</td>
								<td className="table-column">30,146 kg / 66,460 lb</td>
							</tr>
							<tr>
								<td className="table-column">PAYLOAD TO LEO</td>
								<td className="table-column">450 kg / 992 lb</td>
							</tr>
						</thead>
					</table>
					<RealaxWrapper speed={35}>
						<img
							src={`img/${images[this.props.name]}.png`}
							alt="rocket"
							className="rocket"
							data-rellax-speed="14"
						/>
					</RealaxWrapper>
					<article>
						<h3 className="features-subtitle">DESCRIPTION</h3>
						<p className="features-text">
							The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
						</p>
					</article>
				</div>
			</section>
	)};
}