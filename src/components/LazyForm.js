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
} from "../data/Rates";
import Results from "./Results";

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
	const [results, setResults] = useState({});
	const [gotResults, setGotResults] = useState(false);

	const [rscCount, setRscCount] = useState(0);
	const [dscCount, setDscCount] = useState(0);
	const [ascCount, setAscCount] = useState(0);
	const [lscCount, setLscCount] = useState(0);
	const [sdCount, setSdCount] = useState(0);
	const [gmCount, setGmCount] = useState(0);
	const [fmCount, setFmCount] = useState(0);
	const [diamondCount, setDiamondCount] = useState(0);
	const [staminaCount, setStaminaCount] = useState(0);
	const [goldCount, setGoldCount] = useState(0);
	const [abCount, setAbCount] = useState(0);
	const [mythicalArtifactEssenceCount, setMythicArtifactEssenceCount] =
		useState(0);
	const [noInput, setNoInput] = useState(true);

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
				setRscCalcValue(calcRscValue(Math.abs(e.target.value)));
				setRscCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "ascInput":
				setAscCalcValue(calcAscValue(Math.abs(e.target.value)));
				setAscCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "dscInput":
				setDscCalcValue(calcDscValue(Math.abs(e.target.value)));
				setDscCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "lscInput":
				setLscCalcValue(calcLscValue(Math.abs(e.target.value)));
				setLscCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "sdInput":
				setSdCalcValue(calcSdValue(Math.abs(e.target.value)));
				setSdCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "fmInput":
				setFmCalcValue(calcFmValue(Math.abs(e.target.value)));
				setFmCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "gmInput":
				setGmCalcValue(calcGmValue(Math.abs(e.target.value)));
				setGmCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "diamondInput":
				setDiamondCalcValue(calcDiamondValue(Math.abs(e.target.value)));
				setDiamondCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "staminaInput":
				setStaminaCalcValue(calcStaminaValue(Math.abs(e.target.value)));
				setStaminaCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "goldInput":
				setGoldCalcValue(calcGoldValue(Math.abs(e.target.value)));
				setGoldCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "abInput":
				setAbCalcValue(calcAbValue(Math.abs(e.target.value)));
				setAbCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "mythicalArtifactEssenceInput":
				setMythicArtifactEssenceValue(
					calcMythicalArtifactEssenceValue(Math.abs(e.target.value))
				);
				setMythicArtifactEssenceCount(Math.abs(e.target.value));
				setNoInput(false);
				break;
			case "packPriceInput":
				setPackPrice(Math.abs(e.target.value));
				setNoInput(false);
				break;
			default:
				break;
		}
	}
	
	function evaluateValue() {
		if (noInput) {
			alert("Please fill out the form before submitting...");
			return
		}
		if (packPrice === 0) {
			alert("Please enter a pack price before submitting...");
			return
		}
		
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

		let resultsObj = {
			rscCount: rscCount,
			ascCount: ascCount,
			dscCount: dscCount,
			gmCount: gmCount,
			diamondCount: diamondCount,
			staminaCount: staminaCount,
			goldCount: goldCount,
			fmCount: fmCount,
			lscCount: lscCount,
			sdCount: sdCount,
			mythicalArtifactEssenceCount: mythicalArtifactEssenceCount,
			abCount: abCount,
			trueValue: calculatedValue,
			inGamePrice: packPrice,
			rscCalcValue: rscCalcValue,
			diamondCalcValue: diamondCalcValue,
			staminaCalcValue: staminaCalcValue,
			goldCalcValue: goldCalcValue,
			dscCalcValue: dscCalcValue,
			ascCalcValue: ascCalcValue,
			gmCalcValue: gmCalcValue,
			fmCalcValue: fmCalcValue,
			lscCalcValue: lscCalcValue,
			sdCalcValue: sdCalcValue,
			mythicalArtifactEssenceValue: mythicalArtifactEssenceValue,
			abCalcValue: abCalcValue,
		};
		setResults(resultsObj);
		setGotResults(true);
	}

	function clear() {
		let inputs = document.getElementsByTagName("input");
		for (let input of inputs) {
			input.value = "";
		}
		setGotResults(false);
		setRscCount(0);
		setDscCount(0);
		setAscCount(0);
		setLscCount(0);
		setSdCount(0);
		setGmCount(0);
		setFmCount(0);
		setDiamondCount(0);
		setStaminaCount(0);
		setGoldCount(0);
		setAbCount(0);
		setMythicArtifactEssenceCount(0);
		setPackPrice(0);
		setNoInput(true);
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
							Legendary Skill Dust
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

			{gotResults && <Results results={results} />}
		</>
	);
}
