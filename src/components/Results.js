import { rates } from "../data/Rates";

export default function Results(props) {
	const results = props.results;

    // rscCount: rscCount,
    // ascCount: ascCount,
    // dscCount: dscCount,
    // gmCount: gmCount,
    // diamondCount: diamondCount,
    // staminaCount: staminaCount,
    // goldCount: goldCount,
    // fmCount: fmCount,
    // lscCount: lscCount,
    // sdCount: sdCount,
    // mythicalArtifactEssenceCount: mythicalArtifactEssenceCount,
    // abCount: abCount,
    // trueValue: calculatedValue,
    // inGamePrice: packPrice,
    // calculatedValue: calculatedValue,
    // rscCalcValue: rscCalcValue,
    // diamondCalcValue: diamondCalcValue,
    // staminaCalcValue: staminaCalcValue,
    // goldCalcValue: goldCalcValue,
    // dscCalcValue: dscCalcValue,
    // ascCalcValue: ascCalcValue,
    // gmCalcValue: gmCalcValue,
    // fmCalcValue: fmCalcValue,
    // lscCalcValue: lscCalcValue,
    // sdCalcValue: sdCalcValue,
    // mythicalArtifactEssenceValue: mythicalArtifactEssenceValue,
    // abCalcValue: abCalcValue,

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

	return (
		<>
        <hr />
            <div className="row md-1 gap-5">
                <div className="grid col-3 mx-auto">
                    <span className="col" style={{marginRight: 10}}>True Pack Price: {USDollar.format(results.trueValue)}</span>
                    <span className="col" style={{marginLeft: 10}}>In-Game Pack Price: {USDollar.format(results.inGamePrice)}</span>
                </div>

            </div>
			<table className='table mx-auto' style={{ width: 1000 }}>
				<thead>
					<tr>
						<th scope='col'>Item</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Price</th>
						<th scope='col'>Value</th>
					</tr>
				</thead>
				<tbody>
                    {results.rscCount > 0 &&
					<tr>
						<td>Rare Summoning Crystal</td>
                        <td>{results.rscCount}</td>
                        <td>{rates.rareSummoningCrystal.usd}</td>
                        <td>{USDollar.format(results.rscCalcValue)}</td>
					</tr>}
					{results.dscCount > 0 && <tr>
						<td>Divine Summoning Crystal</td>
                        <td>{results.dscCount}</td>
                        <td>{rates.divineSummoningCrystal.usd}</td>
                        <td>{USDollar.format(results.dscCalcValue)}</td>
					</tr>}
                    {results.ascCount > 0 &&
					<tr>
						<td>Ancient Summoning Crystal</td>
                        <td>{results.ascCount}</td>
                        <td>{rates.ancientSummoningCrystal.usd}</td>
                        <td>{USDollar.format(results.ascCalcValue)}</td>
					</tr>}
                    {results.abCount > 0 &&
					<tr>
						<td>Auto Battle</td>
                        <td>{results.abCount}</td>
                        <td>{rates.autoBattle.usd}</td>
                        <td>{USDollar.format(results.abCalcValue)}</td>
					</tr>}
                    {results.lscCount > 0 &&
					<tr>
						<td>Legendary Skill Crystal</td>
                        <td>{results.lscCount}</td>
                        <td>{rates.legendarySkillCrystal.usd}</td>
                        <td>{USDollar.format(results.lscCalcValue)}</td>
					</tr>}
                    {results.sdCount > 0 &&
					<tr>
						<td>Legendary Skill Dust</td>
                        <td>{results.sdCount}</td>
                        <td>{rates.skillDust.usd}</td>
                        <td>{USDollar.format(results.sdCalcValue)}</td>
					</tr>}
                    {results.gmCount > 0 &&
                    <tr>
						<td>Gleaming Meteorite</td>
                        <td>{results.gmCount}</td>
                        <td>{rates.gleamingMeteorite.usd}</td>
                        <td>{USDollar.format(results.gmCalcValue)}</td>
					</tr>}
                    {results.fmCount > 0 &&
                    <tr>
						<td>Flawless Meteorite</td>
                        <td>{results.fmCount}</td>
                        <td>{rates.flawlessMeteorite.usd}</td>
                        <td>{USDollar.format(results.fmCalcValue)}</td>
					</tr>}
                    {results.mythicalArtifactEssenceCount > 0 &&
                    <tr>
						<td>Mytical Artifact Essence</td>
                        <td>{results.mythicalArtifactEssenceCount}</td>
                        <td>{rates.mythicalArtifactEssence.usd}</td>
                        <td>{USDollar.format(results.mythicalArtifactEssenceValue)}</td>
					</tr>}
                    {results.staminaCount > 0 &&
                    <tr>
						<td>Stamina</td>
                        <td>{results.staminaCount}</td>
                        <td>{rates.stamina.usd}</td>
                        <td>{USDollar.format(results.staminaCalcValue)}</td>
					</tr>}
                    {results.goldCount > 0 &&
                    <tr>
						<td>Gold</td>
                        <td>{results.goldCount}</td>
                        <td>{rates.gold.usd}</td>
                        <td>{USDollar.format(results.goldCalcValue)}</td>
					</tr>}
                    {results.diamondCount > 0 &&
                    <tr>
						<td>Diamonds</td>
                        <td>{results.diamondCount}</td>
                        <td>{rates.diamond.usd}</td>
                        <td>{USDollar.format(results.diamondCalcValue)}</td>
					</tr>}
				</tbody>
			</table>
		</>
	);
}
