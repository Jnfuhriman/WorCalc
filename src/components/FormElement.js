import React from "react";
import diamondImg from "../resources/diamond.webp";
import rareSummoningImg from "../resources/rare summoning crystal.webp";
import ancientSummoningImg from "../resources/ancient summoning crystal.webp";
import divineSummoninImg from "../resources/divine summoning crystal.webp";
import autoBattleImg from "../resources/auto battle.webp";
import flawlessMeteoriteImg from "../resources/flawless meteorite.webp";
import gleamingMeteoriteImg from "../resources/gleaming meteorite.webp";
import legendarySkillCrystalImg from "../resources/legendary skill crystal.webp";
import legendarySkillDustImg from "../resources/legendary skill dust.webp";
import goldImg from "../resources/gold.webp";
import staminaImg from "../resources/stamina.webp";
import mythicalArtifactEssenceImg from "../resources/mythical artifact essence.webp";

function FormElement({ label, onUpdate }) {
	let img;
	switch (label) {
		case "Diamond":
			img = diamondImg;
			break;
		case "Gold":
			img = goldImg;
			break;
		case "Stamina":
			img = staminaImg;
			break;
		case "Ancient Summoning Crystal":
			img = ancientSummoningImg;
			break;
		case "Rare Summoning Crystal":
			img = rareSummoningImg;
			break;
		case "Divine Summoning Crystal":
			img = divineSummoninImg;
			break;
		case "Legendary Skill Crystal":
			img = legendarySkillCrystalImg;
			break;
		case "Legendary Skill Dust":
			img = legendarySkillDustImg;
			break;
		case "Gleaming Meteorite":
			img = gleamingMeteoriteImg;
			break;
		case "Flawless Meteorite":
			img = flawlessMeteoriteImg;
			break;
		case "Auto Battle":
			img = autoBattleImg;
			break;
		case "Mythical Artifact Essence":
			img = mythicalArtifactEssenceImg;
			break;
		default:
			img = false;
	}

	return (
		<>
		<div style={{display: "flex",marginLeft:"5%", marginRight: "5%", alignItems:"flex-start", justifyContent:"flex-end"}}>

			{img && (
				<img
					className='align-self-end'
					style={{ scale: "70%" }}
					src={img}
					alt={label}
				/>
			)}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					marginRight: "10%",
					marginLeft: "10%",
					marginBottom: "2%",
				}}
			>
				<label style={{ marginBottom: "5%" }} htmlFor='label'>
					{label}
				</label>
				<input
					style={{ color: "white", textAlign:"center" }}
					className='inputElement'
					onChange={onUpdate}
					id={label}
					type='text'
				/>
			</div>
		</div>
		</>
	);
}

export default FormElement;
