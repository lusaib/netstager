import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { insightType } from "./common";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImageListComp from "./MediaListComponent";
import { Box } from "@mui/material";

interface TableCompProps {
  rows: Array<insightType>;
  onDeleteFn: (arg: string) => void;
  onManageFav: (arg1: string, arg2: boolean) => void;
}

export default function TableComponent({
  rows,
  onDeleteFn,
  onManageFav,
}: TableCompProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "100%", height: "100%", border: "1px solid black" }}
    >
      <Table size="small" aria-label="table component" stickyHeader>
        <TableHead sx={{ backgroundColor: "grey" }}>
          <TableRow>
            <TableCell>Url</TableCell>
            <TableCell>Website Title</TableCell>
            <TableCell>Word Count</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Media list</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflowY: "scroll" }}>
          {rows.map((row: insightType) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.url}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.wordCount}</TableCell>
              <TableCell>{new Date(row.createdAt).toDateString()}</TableCell>
              <TableCell>
                <ImageListComp list={row.mediaUrls} />
                {`(${row.mediaUrls.length})`}
              </TableCell>
              <TableCell>
                <Box
                  component="span"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{ color: "black" }}
                    onClick={() => onDeleteFn(row.id)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{ color: "black", ml: 4 }}
                    onClick={() => onManageFav(row.id, !row.favoriteFlag)}
                  >
                    {row.favoriteFlag ? (
                      <FavoriteIcon fontSize="inherit" />
                    ) : (
                      <FavoriteBorderIcon fontSize="inherit" />
                    )}
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
