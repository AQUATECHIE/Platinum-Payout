import { useState } from "react";
import "../Styles/Signingup.css";
import { useNavigate } from "react-router-dom";


function SigningUp() {

    const [formData, setFormData] = useState({
        firstName: "".toUpperCase(),
        lastName: "",
        userName: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        console.log(event)
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const validateAge = (dateOfBirth) => {
        const today = new Date();
        const birtDate = new Date(dateOfBirth);
        let Age = today.getFullYear() - birtDate.getFullYear();
        const monthDifference = today.getMonth() - birtDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birtDate.getDate())) {
            Age--
        }
        return Age
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = {};

        if (!validateAge(formData.dateOfBirth)) {
            console.log('you are still young')
            validationErrors.dateOfBirth = " get out you are still Young "
        }

        if (formData.password != formData.confirmPassword) {
            console.log('passwords do not match')
            validationErrors.confirmPassword = " passwords do not match"
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            console.log(formData)
            navigate('/')
        }
        fetch("https://platinumpay.onrender.com/api/user/login/6679515907e05876ffeda1c2", {method:"PATCH"},  formData)
        .then((res)=>console.log(res.body))
    }


    return (
        <>
            <div className="signup-form-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h2>Sign Up</h2>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="firstName">First Name </label>
                        <input type="text"
                            id="firstName"
                            value={formData.firstName}
                            name="firstName"
                            onChange={(e)=>handleChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name </label>
                        <input type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </div>

                    <button type="submit">Sign Up</button>


                </form>


            </div>
        </>

    );
}

export default SigningUp