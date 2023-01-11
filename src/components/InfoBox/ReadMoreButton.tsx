import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ReadMoreIcon from '@mui/icons-material/ReadMore';

import { languages } from '../../languages';
import { LanguageCode } from '../../types';

interface ReadMoreButtonProps {
  language: LanguageCode
  system: string
}

const ReadMoreButton = ({ language, system }: ReadMoreButtonProps): JSX.Element => (
  <Box sx={{ bottom: 0, position: 'absolute' }}>
    <Button
      color="primary"
      href={`https://en.wikipedia.org/wiki/${system}`}
      startIcon={<ReadMoreIcon />}
      target="_blank"
      sx={{ marginBottom: '10px' }}
    >
      {languages['Read more'][language]}
    </Button>
  </Box>
);

export default ReadMoreButton;
