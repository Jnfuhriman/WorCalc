import { React, useState } from "react";
import Results from "../components/Results.js";
import {
	ratesArr,
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
} from "../data/Rates.js";
import FormElement from "./FormElement.js";
import packPriceImg from "../resources/packprice.webp";

function Form() {
	let data = ratesArr;
	const [diamond, setDiamond] = useState();
	const [diamondValue, setDiamondValue] = useState(0);
	const [stamina, setStamina] = useState();
	const [staminaValue, setStaminaValue] = useState(0);
	const [gold, setGold] = useState();
	const [goldValue, setGoldValue] = useState(0);
	const [rareSummoningCrystal, setRareSummoningCrystal] = useState();
	const [rareSummoningCrystalValue, setRareSummoningCrystalValue] = useState(0);
	const [ancientSummoningCrystal, setAncientSummoningCrystal] = useState();
	const [ancientSummoningCrystalValue, setAncientSummoningCrystalValue] =
		useState(0);
	const [divineSummoningCrystal, setDivineSummoningCrystal] = useState();
	const [divineSummoningCrystalValue, setDivineSummoningCrystalValue] =
		useState(0);
	const [flawlessMeteorite, setFlawlessMeteorite] = useState();
	const [flawlessMeteoriteValue, setFlawlessMeteoriteValue] = useState(0);
	const [gleamingMeteorite, setGleamingMeteorite] = useState();
	const [gleamingMeteoriteValue, setGleamingMeteoriteValue] = useState(0);
	const [skillDust, setSkillDust] = useState();
	const [skillDustValue, setSkillDustValue] = useState(0);
	const [legendarySkillCrystal, setLegendarySkillCrystal] = useState();
	const [legendarySkillCrystalValue, setLegendarySkillCrystalValue] =
		useState(0);
	const [autoBattle, setAutoBattle] = useState();
	const [autoBattleValue, setAutoBattleValue] = useState(0);
	const [mythicalArtifactEssence, setMythicalArtifactEssence] = useState();
	const [mythicalArtifactEssenceValue, setMythicalArtifactEssenceValue] =
		useState(0);
	const [noInput, setNoInput] = useState(true);
	const [packPrice, setPackPrice] = useState(0);
	const [results, setResults] = useState();
	const [gotResults, setGotResults] = useState(false);

	//methods
	function evaluate() {
		if (noInput) {
			alert("Please fill out the form before submitting...");
			return;
		}
		var calculatedValue =
			rareSummoningCrystalValue +
			ancientSummoningCrystalValue +
			divineSummoningCrystalValue +
			gleamingMeteoriteValue +
			diamondValue +
			staminaValue +
			goldValue +
			flawlessMeteoriteValue +
			legendarySkillCrystalValue +
			skillDustValue +
			mythicalArtifactEssenceValue +
			autoBattleValue;

		let resultsObj = {
			rscCount: rareSummoningCrystal,
			ascCount: ancientSummoningCrystal,
			dscCount: divineSummoningCrystal,
			gmCount: gleamingMeteorite,
			diamondCount: diamond,
			staminaCount: stamina,
			goldCount: gold,
			fmCount: flawlessMeteorite,
			lscCount: legendarySkillCrystal,
			sdCount: skillDust,
			mythicalArtifactEssenceCount: mythicalArtifactEssence,
			abCount: autoBattle,
			trueValue: calculatedValue,
			inGamePrice: packPrice,
			rscCalcValue: rareSummoningCrystalValue,
			diamondCalcValue: diamondValue,
			staminaCalcValue: staminaValue,
			goldCalcValue: goldValue,
			dscCalcValue: divineSummoningCrystalValue,
			ascCalcValue: ancientSummoningCrystalValue,
			gmCalcValue: gleamingMeteoriteValue,
			fmCalcValue: flawlessMeteoriteValue,
			lscCalcValue: legendarySkillCrystalValue,
			sdCalcValue: skillDustValue,
			mythicalArtifactEssenceValue: mythicalArtifactEssenceValue,
			abCalcValue: autoBattleValue,
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
		setRareSummoningCrystal(0);
		setRareSummoningCrystalValue(0);
		setDivineSummoningCrystal(0);
		setDivineSummoningCrystalValue(0);
		setAncientSummoningCrystal(0);
		setAncientSummoningCrystalValue(0);
		setLegendarySkillCrystal(0);
		setLegendarySkillCrystalValue(0);
		setSkillDust(0);
		setSkillDustValue(0);
		setGleamingMeteorite(0);
		setGleamingMeteoriteValue(0);
		setFlawlessMeteorite(0);
		setFlawlessMeteorite(0);
		setDiamond(0);
		setDiamondValue(0);
		setStamina(0);
		setStaminaValue(0);
		setGold(0);
		setGoldValue(0);
		setAutoBattle(0);
		setAutoBattleValue(0);
		setMythicalArtifactEssence(0);
		setMythicalArtifactEssence(0);
		setPackPrice(0);
		setResults(null);
		setNoInput(true);
	}

	const handleElementEvent = (e) => {
		switch (e.target.id) {
			case "Diamond":
				setDiamond(e.target.value);
				setDiamondValue(calcDiamondValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Gold":
				setGold(e.target.value);
				setGoldValue(calcGoldValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Stamina":
				setStamina(e.target.value);
				setStaminaValue(calcStaminaValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Rare Summoning Crystal":
				setRareSummoningCrystal(e.target.value);
				setRareSummoningCrystalValue(calcRscValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Ancient Summoning Crystal":
				setAncientSummoningCrystal(e.target.value);
				setAncientSummoningCrystalValue(calcAscValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Divine Summoning Crystal":
				setDivineSummoningCrystal(e.target.value);
				setDivineSummoningCrystalValue(calcDscValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Legendary Skill Crystal":
				setLegendarySkillCrystal(e.target.value);
				setLegendarySkillCrystalValue(calcLscValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Legendary Skill Dust":
				setSkillDust(e.target.value);
				setSkillDustValue(calcSdValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Gleaming Meteorite":
				setGleamingMeteorite(e.target.value);
				setGleamingMeteoriteValue(calcGmValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Flawless Meteorite":
				setFlawlessMeteorite(e.target.value);
				setFlawlessMeteoriteValue(calcFmValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Auto Battle":
				setAutoBattle(e.target.value);
				setAutoBattleValue(calcAbValue(Math.abs(e.target.value)));
				setNoInput(false);
				break;
			case "Mythical Artifact Essence":
				setMythicalArtifactEssence(e.target.value);
				setMythicalArtifactEssenceValue(
					calcMythicalArtifactEssenceValue(Math.abs(e.target.value))
				);
				setNoInput(false);
				break;
			case "packPrice":
				setPackPrice(e.target.value);
				break;
			default:
				return null;
		}
	};

	let formElementsList = data.map((element) => {
		return (
			<FormElement
				onUpdate={handleElementEvent}
				key={element.label}
				label={element.label}
			/>
		);
	});

	//content
	return (
		<>
			{/* form */}
			<h4 style={{ marginTop: "5%", marginBottom: "5%", marginLeft: "7%", marginRight:"7%" }}>
				Enter the amount of each resource featured in the pack. You do not have
				to fill in each field - just the ones corresponding to the featured
				items in the pack you are evaluating.
			</h4>
			<div className='justify-content-center' style={{ display: "flex" }}>
				{/* left side */}
				<div
					className='inputs col-8'
					style={{
						marginLeft: "5%",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
					}}
				>
					{formElementsList}
				</div>
				{/* right side */}
				<div className='col-4 col-sm-2'>
					<div
						style={{ display: "flex", flexDirection: "column", width: "50%" }}
					>
						<img
							className='align-self-center'
							style={{ scale: "80%" }}
							src={packPriceImg}
							alt=''
						/>
						<label
							className='requiredInput'
							style={{ marginBottom: "3%" }}
							htmlFor='packPrice'
						>
							In game pack price (USD)
						</label>
						<input
							required='true'
							style={{
								marginBottom: "5%",
								color: "white",
								textAlign: "center",
							}}
							className='inputElement'
							id='packPrice'
							onChange={handleElementEvent}
							type='text'
						/>
					</div>
					<hr style={{ width: "50%" }} />
					<div
						style={{ display: "flex", flexDirection: "column", width: "50%" }}
					>
						<button
							className='btn d-grid gap-2 d-md-block'
							style={{
								fontSize: "0.80em",
								textAlign: "center",
								borderRadius: "25px",
								marginBottom: "5%",
								backgroundColor: "#60ACF7",
							}}
							onClick={evaluate}
						>
							Evaluate
						</button>
						<button
							className='btn'
							style={{ backgroundColor: "#2a1e1b", color: "white" }}
							onClick={clear}
						>
							Clear
						</button>
					</div>
				</div>
			</div>
			<hr />
			{/* <div className='formContent'>{formElementsList}</div>
			<hr />
			<div className='container text-center'>
				<div className='col justify-content-start'>
					<input
						id='packPrice'
						className='block col-3 mx-auto align-self-center'
						onChange={handleElementEvent}
						type='text'
						placeholder='In-game pack price'
					/>
					<button
						className='btn col-2 mx-auto align-self-center'
						onClick={evaluate}
						style={{
							backgroundColor: "#60ACF7",
							margin: "auto",
							marginBottom: "1%",
						}}
					>
						Evaluate
					</button>
					<button
						className='btn col-2 mx-auto align-self-center'
						onClick={clear}
						style={{
							backgroundColor: "#60ACF7",
							margin: "auto",
							marginBottom: "1%",
						}}
					>
						Clear
					</button>
				</div>
			</div> */}
			{gotResults && <Results results={results} />}
		</>
	);
}

export default Form;
