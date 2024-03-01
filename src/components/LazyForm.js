import {
	calcDiamondValue,
	calcStaminaValue,
	calcGoldValue,
	calcRscValue,
	calcAscValue,
	calcDscValue,
	calcFmValue,
	calcGmValue,
	calcSdValue,
	calcLscValue,
	calcAbValue,
	calcMythicalArtifactEssenceValue,
} from "../data/rates";
import Lottery_poster from "../resources/Lottery_poster.jpg";

import LazyInfo from "./LazyInfo";
import { useState } from "react";
export default function LazyForm() {
	const [rscCalcValue, setRscCalcValue] = useState(0);
	const [dscCalcValue, setDscCalcValue] = useState(0);
	const [ascCalcValue, setAscCalcValue] = useState(0);
	const [lscCalcValue, setLscCalcValue] = useState(0);
	const [sdCalcValue, setSdCalcValue] = useState(0);
	const [gmCalcValue, setGmCalcValue] = useState(0);
	const [fmCalcValue, setFmCalcValue] = useState(0);
	const [diamondCalcValue, setDiamondCalcValue] = useState(0);
	const [staminaCalcValue, setStaminaCalcValue] = useState(0);
	const [goldCalcValue, setGoldCalcValue] = useState(0);
	const [abCalcValue, setAbCalcValue] = useState(0);
	const [packPrice, setPackPrice] = useState(0);
	const [mythicalArtifactEssenceValue, setMythicArtifactEssenceValue] =
		useState(0);

	const marginTop = {
		marginTop: "20px",
	};
	const btn = {
		backgroundColor: "#60ACF7",
		marginRight: "10px",
		marginLeft: "10px",
	};

	function handleValueUpdate(e) {
		switch (e.target.id) {
			case "rscInput":
				setRscCalcValue(calcRscValue(e.target.value));
				break;
			case "ascInput":
				setAscCalcValue(calcAscValue(e.target.value));
				break;
			case "dscInput":
				setDscCalcValue(calcDscValue(e.target.value));
				break;
			case "lscInput":
				setLscCalcValue(calcLscValue(e.target.value));
				break;
			case "sdInput":
				setSdCalcValue(calcSdValue(e.target.value));
				break;
			case "fmInput":
				setFmCalcValue(calcFmValue(e.target.value));
				break;
			case "gmInput":
				setGmCalcValue(calcGmValue(e.target.value));
				break;
			case "diamondInput":
				setDiamondCalcValue(calcDiamondValue(e.target.value));
				break;
			case "staminaInput":
				setStaminaCalcValue(calcStaminaValue(e.target.value));
				break;
			case "goldInput":
				setGoldCalcValue(calcGoldValue(e.target.value));
				break;
			case "abInput":
				setAbCalcValue(calcAbValue(e.target.value));
				break;
			case "mythicalArtifactEssenceInput":
				setMythicArtifactEssenceValue(
					calcMythicalArtifactEssenceValue(e.target.value)
				);
				break;
			case "packPriceInput":
				setPackPrice(e.target.value);
				break;
			default:
				break;
		}
	}

	function evaluateValue() {
		let calculatedValue =
			rscCalcValue +
			diamondCalcValue +
			staminaCalcValue +
			goldCalcValue +
			dscCalcValue +
			ascCalcValue +
			gmCalcValue +
			fmCalcValue +
			lscCalcValue +
			sdCalcValue +
			mythicalArtifactEssenceValue +
			abCalcValue;
		console.log(calculatedValue);
		if (calculatedValue > packPrice) {
			alert(`Good Deal!`);
		} else {
			alert(`Not a good Deal`);
		}
	}

	function clear() {
		let inputs = document.getElementsByTagName("input");
		for (let input of inputs) {
			input.value = "";
		}
	}

	return (
		<>
			<div className='main container-md' style={marginTop}>
				{/* <img className='rounded mx-auto d-block' src={Lottery_poster} alt='lottery' width={400} /> */}

				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Rare Summoning Crystal
						</span>
						<input
							className='float-end'
							id='rscInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Divine Summoning Crystal
						</span>
						<input
							className='float-end'
							id='dscInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Ancient Summoning Crystal
						</span>
						<input
							className='float-end'
							id='ascInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>
				</div>

				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Auto Battle
						</span>
						<input
							className='float-end'
							id='abInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Legendary Skill Crystal
						</span>
						<input
							className='float-end'
							id='lscInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Skill Dust
						</span>
						<input
							className='float-end'
							id='sdInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>
				</div>

				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Gleaming Meteorite
						</span>
						<input
							className='float-end'
							id='gmInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Flawless Meteorite
						</span>
						<input
							className='float-end'
							id='fmInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Diamonds
						</span>
						<input
							className='float-end'
							id='diamondInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>
				</div>

				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Stamina
						</span>
						<input
							className='float-end'
							id='staminaInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Gold
						</span>
						<input
							className='float-end'
							id='goldInput'
							type='text'
							onChange={handleValueUpdate}
						/>
					</div>

					<div className='col'>
						<span className='float-start' style={{ marginRight: "10px" }}>
							Mythical Artifact Essence
						</span>
						<input
							className='float-end'
							id='mythicalArtifactEssenceInput'
							onChange={handleValueUpdate}
							type='text'
						/>
					</div>
				</div>

				<hr />
				<div className='row md-1 gap-3' style={marginTop}>
					<div className='grid col-5 mx-auto'>
						<span style={{ marginRight: "10px" }}>In-Game Pack Price</span>
						<input
							id='packPriceInput'
							onChange={handleValueUpdate}
							placeholder='00.00'
							type='text'
						/>
					</div>
				</div>

				<div className='row md-1 gap-3' style={marginTop}>
					<div className='grid col-3 mx-auto'>
						<button className='col btn' style={btn} onClick={evaluateValue}>
							Evaluate
						</button>
						<button className='col btn btn-info' style={btn} onClick={clear}>
							Clear
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
