import { object, string, number, date, } from 'yup';
export default ({ formik, schema, id, title }) => {
    Object.entries(formik.values).forEach(([key, val]) => {
        try {
            let userSchema = object(schema);
            const result = userSchema.validateSync({ ...formik.values, [key]: val });
        } catch (err) {
            console.error(err);
        }
    });
    return (
        <>
            <label htmlFor={id}>{title}</label>
            <div>
                <input
                    id={id}
                    name={id}
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
            </div>
        </>
    )
}