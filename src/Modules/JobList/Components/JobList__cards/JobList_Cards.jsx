import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, CardHeader, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobDetailById } from "../../Slices/JobListSlice";
import styles from "./JobList__Cards.module.scss";
import "./MuiCardHeader.css";
const JobListCards = (props) => {
  const { jobsByName } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToJobDetail = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };
  const handleSelectCard = async (jobId) => {
    try {
      await dispatch(getJobDetailById(jobId)).unwrap();
      goToJobDetail(jobId);
    } catch (error) {
      console.log(error);
    }
  };
  if (!jobsByName) {
    console.log("no data");
    return;
  } else {
    return (
      <div className={styles.cards}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.cards__row}>
              <div className="grid grid-cols-4 gap-5">
                {jobsByName.map((jobCard) => {
                  return (
                    <div
                      key={jobCard.id}
                      onClick={() => handleSelectCard(jobCard.id)}
                      className=" col-span-1"
                    >
                      <div
                        className={`${styles.cards__col} h-full max-h-[375px]`}
                      >
                        <div className={styles.cards__col_wrapper}>
                          <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                              component="img"
                              height="140"
                              image={jobCard.congViec.hinhAnh}
                              alt="img"
                            />
                            <CardContent className="-mt-3 ">
                              <div className={`${styles.col__header} mb-2`}>
                                <div className={styles.col__avatar}>
                                  <Avatar alt="creator" src={jobCard.avatar} />
                                </div>
                                <CardHeader
                                  className={`${styles.col__name} `}
                                  title={jobCard.tenNguoiTao}
                                  subheader={jobCard.tenChiTietLoai}
                                  sx={{ fontSize: "14px", color: "#000" }}
                                ></CardHeader>
                              </div>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  minHeight: "40px",
                                  fontWeight: 500,
                                  color: "#000",
                                }}
                                className="line-clamp-2 font-semibold hover:text-green"
                              >
                                {jobCard.congViec.tenCongViec}
                              </Typography>
                              <div className={styles.col__star}>
                                <StarIcon
                                  sx={{
                                    color: "#ffbe5b",
                                    marginTop: "10px",
                                    marginRight: "5px",
                                    fontSize: "18px",
                                  }}
                                />
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                  component="h6"
                                  sx={{
                                    color: "#ffbe5b",
                                    fontWeight: 700,
                                    marginTop: "13px",
                                    fontSize: "14px",
                                    marginRight: "3px",
                                  }}
                                >
                                  {jobCard.congViec.saoCongViec}.0
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                  component="h6"
                                  sx={{
                                    marginTop: "13px",
                                    fontSize: "14px",
                                  }}
                                >
                                  ({jobCard.congViec.danhGia})
                                </Typography>
                              </div>
                            </CardContent>
                            <CardActions
                              className={styles.cardActions}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                              component="span"
                            >
                              <Button
                                size="small"
                                sx={{ justifyContent: "flex-start" }}
                                component="span"
                              >
                                <FavoriteIcon
                                  sx={{
                                    fontSize: "18px",
                                    color: "#b5b6ba",
                                    padding: "0px",
                                  }}
                                  color="text.secondary"
                                />
                              </Button>
                              <Button
                                size="small"
                                sx={{
                                  color: "#b5b6ba",
                                  fontSize: "13px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                component="span"
                              >
                                Starting at
                                <span className={`${styles.price}`}>
                                  ${jobCard.congViec.giaTien}
                                </span>
                              </Button>
                            </CardActions>
                          </Card>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default JobListCards;
