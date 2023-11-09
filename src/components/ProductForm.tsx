import { FormGroup, TextField } from "@mui/material"

const ProductForm = () => {
    return (
        <FormGroup>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input id="description" type="text" className="form-control" />
            </div>
            <button className="btn btn-primary mb-3">Add new user</button>
        </FormGroup>
    )
}

export default ProductForm
