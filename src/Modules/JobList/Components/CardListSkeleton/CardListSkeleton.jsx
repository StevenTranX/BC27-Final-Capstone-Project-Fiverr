import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";

const CardListSkeleton = ({ length }) => {
  return (
    <Container>
      <Box height={"280px"}>
        <Grid container>
          {Array.from(new Array(length)).map((x, index) => {
            return (
              <Grid
                maxWidth="270px"
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <Box padding={1}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={"150px"}
                  />
                  <Stack className="flex">
                    <Skeleton
                      variant="circular"
                      height={"30px"}
                      width={"30px"}
                    />
                  </Stack>
                  <Skeleton variant="rectangular" height={"10px"} />
                  <Skeleton width={"100%"} />
                  <Skeleton
                    width={"100%"}
                    variant="rectangular"
                    height={"30px"}
                  />
                  <Skeleton
                    width={"100%"}
                    variant="rectangular"
                    height={"20px"}
                    marginTop="5px"
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

CardListSkeleton.propTypes = {
  length: PropTypes.number,
};
CardListSkeleton.defaultProps = {
  length: 4,
};

export default CardListSkeleton;
