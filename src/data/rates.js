const rates = {
	diamond: { usd: 0.01 },
	stamina: { usd: 0.003 },
	gold: { usd: 0.0000012 },
	rareSummoningCrystal: { usd: 0.88 },
	ancientSummoningCrystal: { usd: 4 },
	divineSummoningCrystal: { usd: 8 },
	legendarySkillCrystal: { usd: 5 },
	skillDust: { usd: 0.03 },
	gleamingMeteorite: { usd: 0.06 },
	flawlessMeteorite: { usd: 0.0125 },
	autoBattle: { usd: 0.025 },
    mythicalArtifactEssence: { usd: 30 }
};

const ratesArr = [
	{ usd: 0.01, label: 'Diamond', img: 'diamond.webp' },
	{ usd: 0.003, label: 'Stamina', img: 'stamina.webp' },
	{ usd: 0.0000012, label: 'Gold', img: 'gold.webp' },
	{ usd: 0.88, label: 'Rare Summoning Crystal', img: 'rare summoning crystal.webp' },
	{ usd: 4, label: 'Ancient Summoning Crystal', img: 'ancient summoning crystal.webp' },
	{ usd: 8, label: 'Divine Summoning Crystal', img: 'divine summoning crystal.webp' },
	{ usd: 5, label: 'Legendary Skill Crystal', img: 'legendary skill crystal.webp' },
	{ usd: 0.025, label: 'Legendary Skill Dust', img: 'legendary skill dust.webp' },
	{ usd: 0.06, label: 'Gleaming Meteorite', img: 'gleaming meteorite.webp' },
	{ usd: 0.0125, label: 'Flawless Meteorite', img: 'flawless meteorite' },
	{ usd: 0.025, label: 'Auto Battle', img: 'auto battle.webp' },
	{ usd: 30, label: 'Mythical Artifact Essence', img: 'mythical artifact essence.webp' }
];

function calcDiamondValue(quantity) {
	console.log(`Calculating diamond value...`);
	return quantity * rates.diamond.usd;
}

function calcStaminaValue(quantity) {
	console.log(`Calculating stamina value...`);
	return quantity * rates.stamina.usd;
}

function calcGoldValue(quantity) {
	console.log(`Calculating gold value...`);
	return quantity * rates.gold.usd;
}

function calcRscValue(quantity) {
	console.log(`Calculating Rsc value...`);
	return quantity * rates.rareSummoningCrystal.usd;
}

function calcAscValue(quantity) {
	console.log(`Calculating Asc value...`);
	return quantity * rates.ancientSummoningCrystal.usd;
}

function calcDscValue(quantity) {
	console.log(`Calculating Dsc value...`);
	return quantity * rates.divineSummoningCrystal.usd;
}

function calcLscValue(quantity) {
	console.log(`Calculating Lsc value...`);
	return quantity * rates.legendarySkillCrystal.usd;
}

function calcSdValue(quantity) {
	console.log(`Calculating sd value...`);
	return quantity * rates.skillDust.usd;
}

function calcGmValue(quantity) {
	console.log(`Calculating Gm value...`);
	return quantity * rates.gleamingMeteorite.usd;
}

function calcFmValue(quantity) {
	console.log(`Calculating Fm value...`);
	return quantity * rates.flawlessMeteorite.usd;
}

function calcAbValue(quantity) {
	console.log(`Calculating ab value...`);
	return quantity * rates.autoBattle.usd;
}

function calcMythicalArtifactEssenceValue(quantity) {
    console.log(`Calculating mae value...`);
    return quantity * rates.mythicalArtifactEssence.usd;
}

export {
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
	rates,
	ratesArr
};
