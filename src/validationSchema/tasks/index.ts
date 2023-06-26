import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  status: yup.string().required(),
  remarks: yup.string(),
  expected_completion_date: yup.date(),
  assigned_to: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
