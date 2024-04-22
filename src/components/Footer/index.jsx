import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import {
    UilLinkedin,
    UilInstagram,
    UilTelegram,
    UilWallet,
} from "@iconscout/react-unicons";
import rakmans from "./rakmans.svg";
import rakmansDark from "./rakmansDark.svg";

import { useTheme } from "@emotion/react";
import { copyToClipboard } from "../../utils";
const Footer = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                component='a'
                target='_blank'
                href='https://rakmans.github.io/'
                sx={{
                    m: "auto",
                    mt: "1%",
                    textDecoration: "none",
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        pt: "4vh",
                    }}>
                    <Box
                        component='img'
                        src={rakmans}
                        sx={{
                            m: "auto",
                            width: 80,
                        }}
                    />
                </Box>

                <Box sx={{ textAlign: "center", mt: "1vh", pb: "2vh" }}>
                    <IconButton
                        target='_blank'
                        href='https://www.linkedin.com/in/rakmans/'
                        sx={{ mr: "2.5vw" }}>
                        <UilLinkedin
                            color={
                                theme.palette.mode === "dark"
                                    ? "#90caf9"
                                    : "#0d47a1"
                            }
                            size='3vw'
                        />
                    </IconButton>
                    <IconButton sx={{ mr: "1.25vw" }}>
                        <UilInstagram
                            color={
                                theme.palette.mode === "dark"
                                    ? "#90caf9"
                                    : "#0d47a1"
                            }
                            size='3vw'
                        />
                    </IconButton>
                    <Typography
                        component='a'
                        target='_blank'
                        href='https://rakmans.github.io/'
                        sx={{
                            m: "auto",
                            mt: "2vh",
                            fontSize: "2vw",
                            fontWeight: "700",
                            textDecoration: "none",
                            color:
                                theme.palette.mode === "dark"
                                    ? "#90caf9"
                                    : "#0d47a1",
                        }}>
                        RAKMANS
                    </Typography>
                    <IconButton
                        sx={{ ml: "1.25vw" }}
                        target='_blank'
                        href='https://t.me/rakmans_support'>
                        <UilTelegram
                            color={
                                theme.palette.mode === "dark"
                                    ? "#90caf9"
                                    : "#0d47a1"
                            }
                            size='3vw'
                        />
                    </IconButton>

                    <IconButton sx={{ ml: "2.5vw" }}>
                        <UilWallet
                            onClick={() =>
                                copyToClipboard(
                                    "0x8dedDf9068B594310b8914079CA41CE1cb5Bf6D0"
                                )
                            }
                            color={
                                theme.palette.mode === "dark"
                                    ? "#90caf9"
                                    : "#0d47a1"
                            }
                            size='3vw'
                        />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
