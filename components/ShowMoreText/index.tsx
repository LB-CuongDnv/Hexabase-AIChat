import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

type typeProps = {
  text: string;
  maxCharCount?: number;
};

const styleTextAction = { textDecoration: 'underline', cursor: 'pointer', display: 'inline', fontSize: '0.8rem' };

const ReadMore: React.FC<typeProps> = ({ text, maxCharCount = 200 }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggle = () => setShowFullText(!showFullText);

  const truncatedText = showFullText ? text : text.slice(0, maxCharCount) + '...';

  return (
    <Box sx={{ backgroundColor: '#fff1d7', p: 1, borderRadius: 2, mt: 1 }}>
      <Typography component="span">
        <Typography color="red" component="span">
          Reason For Rejection:
        </Typography>{' '}
        {truncatedText}
      </Typography>
      {text.length > maxCharCount && (
        <Typography component="span" onClick={toggle}>
          {showFullText ? (
            <Typography sx={styleTextAction}>See Less</Typography>
          ) : (
            <Typography sx={styleTextAction}>See More</Typography>
          )}
        </Typography>
      )}
    </Box>
  );
};

export default ReadMore;
