import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Controller } from 'react-hook-form';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Cybersoft Education',
  'FPT University',
  'Utah Valley',
  'IWA Certification',
  'Certified Software Development Professional - IEEE',
  'Web Technologies',
  '	Microsoft Certified Solutions Developer (MCSD)',
  'Microsoft Certified Application Developer (MCAD)',
  '	Javascript Development Certified Professional',
  'Other...',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectCertification(props) {
  const { form, name, label, disabled, setValue, value } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];
  const theme = useTheme();
  const [certification, setCertification] = React.useState([]);
  console.log(certification);
  const handleChange = (event) => {
    const { value } = event.target;

    setCertification(value);
  };

  return (
    <div>
      <Controller
        disabled={disabled}
        error={!!hasError}
        label={label}
        control={control}
        name={name}
        render={({ field }) => (
          <FormControl label={label} fullWidth margin="normal">
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              label="Certification"
              labelId={label}
              id={name}
              multiple
              value={certification || []}
              onChange={handleChange}
              input={<OutlinedInput label="certification" />}
              MenuProps={MenuProps}
              {...field}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, certification, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
    </div>
  );
}
