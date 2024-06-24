import axios from 'axios';

const isObject = (value: object) => value?.constructor === Object;
export const getFormData = (_data: object): FormData => {
  const data = new FormData();

  const append = (value: any, key = '', initial = true) => {
    if (isObject(value) || Array.isArray(value)) {
      Object.entries(value as object).forEach(([_key, _value]) => {
        const __key = initial
          ? _key
          : key +
            (isObject(value)
              ? [`${_key}`]
              : Array.isArray(value)
                ? '[]'
                : _key);

        append(_value, __key, false);
      });
    } else {
      data.append(key, [undefined, null].includes(value) ? '' : value);
    }
  };

  append(_data);

  return data;
};

export const sendFormData = async function (path: string, form: FormData) {
  try {
    await axios.post(
      `https://techify-001-site1.htempurl.com/api/v1/${path}`,
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`,
          'x-api-key': 'x5b9j8p2qRz3vdK1st7yf4ul6wa0ezcv',
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const updateFormData = async function (
  path: string,
  form: FormData,
  uuid: String
) {
  try {
    await axios.put(
      `https://techify-001-site1.htempurl.com/api/v1/${path}/${uuid}`,
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`,
          'x-api-key': 'x5b9j8p2qRz3vdK1st7yf4ul6wa0ezcv',
        },
      }
    );
  } catch (error) {
    throw error;
  }
};
