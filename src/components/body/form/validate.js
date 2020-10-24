const Validate = (value) => {
  const errors = {};

  if (!value.title) {
    errors.title = 'タイトルを入力してください';
  } else if (value.title.length > 100) {
    errors.title = 'タイトルは100文字以内にしてください';
  }

  if (!value.description) {
    errors.description = '説明文を入力してください';
  } else if (value.description.length > 500) {
    errors.description = '説明文は500文字以内です';
  }

  if (!value.price) {
    errors.price = '金額を入力してください';
  } else if (value.price >= 100000) {
    errors.price = '金額は100,000円以下で入力してください';
  }

  return errors;
};

export default Validate;
