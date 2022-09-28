import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { useEffect } from 'react';
import { LabelImportantTwoTone } from '@mui/icons-material';
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
  const { form, name, label, disabled, onChange } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];
  const theme = useTheme();
  const [certification, setCertification] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCertification(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    // onChange('skill', skill);
  };
  useEffect(() => {
    onChange('certification', certification);
  }, [certification]);

  return (
    <div>
      <Controller
        disabled={disabled}
        error={!!hasError}
        label={label}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <FormControl label={label} fullWidth margin="normal">
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              label="Certification"
              labelId={label}
              id={name}
              multiple
              value={certification}
              defaultValue={[]}
              onChange={handleChange}
              input={<OutlinedInput label={label} />}
              MenuProps={MenuProps}
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
