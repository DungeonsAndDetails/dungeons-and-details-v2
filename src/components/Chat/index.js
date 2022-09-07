import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import './styles.css';
import { Formik, Form } from 'formik';
import TextInputField from '../../components/TextInputField';
import moment from 'moment';
import * as Yup from 'yup';
import { chatContext } from '../../context/chatContext';
import { userContext } from '../../context/userContext';

const Chat = () => {
	const chatCreation = useContext(chatContext);
	const user = useContext(userContext);
	const [chatOpen, setChatOpen] = useState(false);
	const chatRef = useRef();

	// Formik
	const initialValues = { chatBar: '' };
	const validationSchema = Yup.object().shape({
		chatBar: Yup.string().required('').min(1, 'Empty'),
	});

	const onSubmit = (values, { resetForm }) => {
		const text = values.chatBar;
		const time = moment();
		const timeStamp = time.format('LT');
		const { displayName } = user.state;

		chatCreation.createChat({ text, timeStamp, displayName });
		resetForm(initialValues);
	};

	const onClick = () => {
		setChatOpen(!chatOpen);
	};

	useEffect(() => {
		chatRef.current.scrollIntoView();
	}, [chatCreation.state.chat]);

	console.log('chat', chatCreation.state.chat);

	return (
		<div className="chat-component bottom-0 right-0 absolute">
			<div className="border border-l">
				<div></div>
				<div>
					<div className="flex bg-gradient-to-br from-gray-300 to-slate-500 text-black font-bold">
						<div className="flex w-full pl-4 h-10">
							<span className="text-xl my-auto">Chat Bar</span>
						</div>
						<div className="flex my-auto w-10">
							<button type="button" onClick={onClick} className="text-4xl w-10">
								<span>{chatOpen ? '-' : '+'}</span>
							</button>
						</div>
					</div>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<Form>
							<div
								className={`flex flex-col bg-slate-800 duration-700 w-96 h-${
									chatOpen ? '96' : '0'
								}`}
							>
								<div
									className={`chat-box grow overflow-y-auto overflow-hidden break-wordsh-96 ${
										chatOpen ? 'm-1 p-1' : ''
									}`}
								>
									{chatCreation.state.chat.map((newLine, i) => {
										return (
											<div className="" key={i}>
												<span className="text-gold font-bold">{newLine.displayName}</span>{' '}
												<span className="text-xs">{newLine.timeStamp}</span>
												<div>
													<span className="text-sm">{newLine.text}</span>
												</div>
												<div className="text-sm">
													{newLine.commandData && (
														<>
															<div className=" underline">
																(
																{newLine.commandData.diceRolls.map((diceRoll, i) => {
																	const showPlus = i < newLine.commandData.diceRolls.length - 1;

																	return (
																		<span key={`${i} diceRoll`}>{`${diceRoll}${
																			showPlus ? ' + ' : ''
																		}`}</span>
																	);
																})}
																) <span> + {newLine.commandData.diceMod}</span>
															</div>

															<span className=" text-base font-bold border">
																{newLine.commandData.sum}
															</span>
														</>
													)}
												</div>
											</div>
										);
									})}
									<div ref={chatRef} />
								</div>

								<div className={`chat-bar border-t flex ${chatOpen ? '' : 'hidden'}`}>
									<TextInputField className="" name="chatBar" placeholder="Type Here" type="text" />
									<Button type="submit" className="w-12">
										Enter
									</Button>
								</div>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

Chat.defaultProps = {};

export default Chat;
