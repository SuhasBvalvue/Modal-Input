import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import Mod from "./Mod";

class Abc extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			name: "",
			modalInputName: "",
		};
	}

	handleChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		console.log(name);
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		this.setState({ name: this.state.modalInputName });
		this.modalClose();
	}

	modalOpen() {
		this.setState({ modal: true });
	}

	modalClose() {
		this.setState({
			modalInputName: "",
			modal: false,
		});
	}

	render() {
		return (
			<div className="Abc">
				<h1>
					Hello!! <Mod name={this.state.name}></Mod>
				</h1>
				<button
					type="button"
					className="btn btn-primary"
					onClick={e => this.modalOpen(e)}
				>
					Click Me!!
				</button>

				<Modal
					class="modal"
					show={this.state.modal}
					handleClose={e => this.modalClose(e)}
				>
					<h2>Hello Modal</h2>
					<div className="form-group">
						<label for="recipient-name" class="col-form-label">
							Input Name:
						</label>
						<input
							type="text"
							value={this.state.modalInputName}
							name="modalInputName"
							onChange={e => this.handleChange(e)}
							className="form-control"
						/>
					</div>
					<div class="modal-footer">
						<button
							class="btn btn-primary"
							onClick={e => this.handleSubmit(e)}
							type="button"
						>
							Save
						</button>
						<button
							type="button"
							class="btn btn-secondary"
							onClick={e => this.modalClose(e)}
							data-dismiss="modal"
						>
							Close
						</button>
					</div>
				</Modal>
			</div>
		);
	}
}

export default Abc;
