import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";

const FullNameForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const fName = firstName.trim();
        const lName = lastName.trim();
        setFullName(`Full Name: ${fName} ${lName}`);

    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 2,
                }}
            >
                <Typography variant="h5">Full Name Display</Typography>

                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            width: 300,
                        }}
                    >
                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <Button type="submit" variant="contained" color="success">
                            Submit
                        </Button>
                        <p>{fullName}</p>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default FullNameForm;
