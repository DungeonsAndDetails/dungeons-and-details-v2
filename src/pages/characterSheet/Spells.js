import React from 'react';
import { Form, Formik } from 'formik';
import TextInputField from '../../components/TextInputField';

const Spells = () => {
	return (
		<div>
			<div className="block font-bold text-xl text-center text-black bg-white">
				<div className="max-w grid grid-cols-3 rounded overflow-hidden shadow-lg ">
					<div className="px-6 py-4">
						<div className="col-2">
							<div class="spell-level">
								<div class="level">
									<span class="label">Spell #1</span>
								</div>
								<div class="cantrips">
									<span class="label" D-Cantrips="cantrips">
										CANTRIPS
									</span>
								</div>
								<p>Enter Spell Information</p>
								<Formik
									initialValues={{
										spname1: '',
										spchool1: '',
									}}
								>
									<Form>
										<div className="flex">
											<label for="spname1">Spell Name: </label>
											<TextInputField
												name="spname1"
												type="text"
												placeholder="Alakazam!"
												className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white"
											/>
										</div>
										<div className="flex">
											<label for="spschool1">School: </label>
											<select
												name="spschool1"
												placeholder="Alakazam!"
												className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white"
											>
												<option value="Abjuration">Abjuration</option>
												<option value="Conjuration">Conjuration</option>
												<option value="Divination">Divination</option>
												<option value="Enchantment">Enchantment</option>
												<option value="Evocation">Evocation</option>
												<option value="Illusion">Illusion</option>
												<option value="Necromany">Necromany</option>
												<option value="Transmutation">Transmutation</option>
											</select>
										</div>

										<label>
											<p>
												Cast Time:
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												Cast Range:
											</p>
										</label>
										<div className="grid grid-cols-2 ">
											<TextInputField
												name="sptime1"
												type="number"
												placeholder="0"
												className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white w-16"
											/>
											<TextInputField
												name="sprange1"
												type="number"
												placeholder="0"
												className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white w-16"
											/>
										</div>
										<div>
											<label for="sptarget1">Target:</label>
											<TextInputField
												name="sptarget1"
												type="string"
												placeholder=""
												className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white w-36"
											/>
											<label classname="text-bold">Components:</label>
											<form>
												<input type="checkbox" id="componentV" name="componentV" value="V" />
												<label for="componentV">V </label>
												<input type="checkbox" id="componentS" name="componentS" value="S" />
												<label for="componentS">S </label>
												<input type="checkbox" id="componentM" name="componentM" value="M" />
												<label for="componentM">M</label>
											</form>
											<TextInputField
												name="componenttxt"
												type="string"
												placeholder=""
												className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white w-36"
											/>
											<form>
												<input
													type="checkbox"
													id="Concentration"
													name="Concentration"
													value="Concentration"
												/>
												<label for="Concentration">Concentration </label>
											</form>
										</div>
									</Form>
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Spells;
