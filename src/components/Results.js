import { rates } from "../data/Rates";
import { useEffect, useState } from "react";

export default function Results(props) {
	const results = props.results;
	const [percentValue, setPercentValue] = useState(0);

	let USDollar = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	useEffect(() => {
		calculateValue();
	});

	function calculateValue() {
		let value = Math.round(
			Math.abs(
				((results.trueValue - results.inGamePrice) / results.inGamePrice) * 100
			)
		);
		setPercentValue(value);
	}

	return (
		<>
			<hr />
			<div className="mx-auto" style={{display:"flex", justifyContent: "space-evenly", width:"50%", marginRight:"5%"}}>
				<span>True Pack Price: {USDollar.format(results.trueValue)}</span>
				<span>In-Game Pack Price: {USDollar.format(results.inGamePrice)}</span>
			</div>
			{/* <div className='row md-5 gap-3'>
				<div className='grid col-3 mx-auto'>
					<span className='col' style={{ marginRight: 10 }}>
						True Pack Price: {USDollar.format(results.trueValue)}
					</span>
					<span className='col' style={{ marginLeft: 10 }}>
						In-Game Pack Price: {USDollar.format(results.inGamePrice)}
					</span>
				</div>
			</div> */}

			<table className='mx-auto' style={{ width: "50%" }}>
				<thead style={{backgroundColor:"#2a1e1b"}}>
					<tr>
						<th scope='col'>Item</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Price</th>
						<th scope='col'>Value</th>
					</tr>
				</thead>
				<tbody>
					{results.rscCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Rare Summoning Crystal</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.rscCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{USDollar.format(rates.rareSummoningCrystal.usd)}</td>
							<td style={{textAlign: "center"}}>{USDollar.format(results.rscCalcValue)}</td>
						</tr>
					)}
					{results.dscCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Divine Summoning Crystal</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.dscCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.divineSummoningCrystal.usd}</td>
							<td>{USDollar.format(results.dscCalcValue)}</td>
						</tr>
					)}
					{results.ascCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Ancient Summoning Crystal</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.ascCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.ancientSummoningCrystal.usd}</td>
							<td>{USDollar.format(results.ascCalcValue)}</td>
						</tr>
					)}
					{results.abCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Auto Battle</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.abCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.autoBattle.usd}</td>
							<td>{USDollar.format(results.abCalcValue)}</td>
						</tr>
					)}
					{results.lscCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Legendary Skill Crystal</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.lscCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.legendarySkillCrystal.usd}</td>
							<td>{USDollar.format(results.lscCalcValue)}</td>
						</tr>
					)}
					{results.sdCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Legendary Skill Dust</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.sdCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.skillDust.usd}</td>
							<td>{USDollar.format(results.sdCalcValue)}</td>
						</tr>
					)}
					{results.gmCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Gleaming Meteorite</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.gmCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.gleamingMeteorite.usd}</td>
							<td>{USDollar.format(results.gmCalcValue)}</td>
						</tr>
					)}
					{results.fmCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Flawless Meteorite</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.fmCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.flawlessMeteorite.usd}</td>
							<td>{USDollar.format(results.fmCalcValue)}</td>
						</tr>
					)}
					{results.mythicalArtifactEssenceCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Mytical Artifact Essence</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.mythicalArtifactEssenceCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.mythicalArtifactEssence.usd}</td>
							<td>{USDollar.format(results.mythicalArtifactEssenceValue)}</td>
						</tr>
					)}
					{results.staminaCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Stamina</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.staminaCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.stamina.usd}</td>
							<td>{USDollar.format(results.staminaCalcValue)}</td>
						</tr>
					)}
					{results.goldCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Gold</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.goldCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.gold.usd}</td>
							<td>{USDollar.format(results.goldCalcValue)}</td>
						</tr>
					)}
					{results.diamondCount > 0 && (
						<tr style={{borderBottom: "solid"}}>
							<td style={{borderRight: "solid", textAlign:"center"}}>Diamonds</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{results.diamondCount}</td>
							<td style={{borderRight: "solid", textAlign:"center"}}>{rates.diamond.usd}</td>
							<td>{USDollar.format(results.diamondCalcValue)}</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
}
