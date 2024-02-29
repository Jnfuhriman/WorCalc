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
} from "../data/rates";
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
	const marginTop = {
		marginTop: "20px",
	};
	const btn = {
		backgroundColor: "#60ACF7",
		marginRight: "10px",
		marginLeft: "10px"
	}

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
				<LazyInfo />
				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span>Rare Summoning Crystal</span>
						<input id='rscInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Divine Summoning Crystal</span>
						<input id='dscInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Ancient Summoning Crystal</span>
						<input id='ascInput' type='text' onChange={handleValueUpdate} />
					</div>
				</div>

				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span>Auto Battle</span>
						<input id='abInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Legendary Skill Crystal</span>
						<input id='lscInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Skill Dust</span>
						<input id='sdInput' type='text' onChange={handleValueUpdate} />
					</div>
				</div>

				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span>Gleaming Meteorite</span>
						<input id='gmInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Flawless Meteorite</span>
						<input id='fmInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Diamonds</span>
						<input id='diamondInput' type='text' onChange={handleValueUpdate} />
					</div>
				</div>

				<div className='row gap-3' style={marginTop}>
					<div className='col'>
						<span>Stamina</span>
						<input id='staminaInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Gold</span>
						<input id='goldInput' type='text' onChange={handleValueUpdate} />
					</div>

					<div className='col'>
						<span>Pack Price</span>
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
