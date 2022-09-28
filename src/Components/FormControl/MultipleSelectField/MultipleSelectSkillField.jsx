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
  'HTML',
  'CSS',
  'Javascript',
  'Python',
  'ReactJS',
  'Angular',
  'PHP',
  'Java',
  'NodeJs',
  'NextJs',
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

export default function MultipleSelectSkillField(props) {
  const { form, name, label, disabled, onChange } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];
  const theme = useTheme();
  const [skill, setSkill] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkill(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    // onChange('skill', skill);
  };
  useEffect(() => {
    onChange('skill', skill);
  }, [skill]);

  return (
    <div>
      <Controller
        disabled={disabled}
        error={!!hasError}
        label={label}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id={label}>{label}</InputLabel>
            <Select
              labelId={label}
              id={label}
              multiple
              value={skill}
              defaultValue={[]}
              onChange={handleChange}
              input={<OutlinedInput label="skill" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, skill, theme)}
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
