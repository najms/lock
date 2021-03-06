import React from 'react';
import InputWrap from './input_wrap';

export default class ConfirmPasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hasFocus() {
    return this.state.focused;
  }

  render() {
    const { lockId, iconUrl, invalidHint, isValid, name, ariaLabel, onChange, value } = this.props;
    let { icon } = this.props;
    const { focused } = this.state;

    if (!icon && typeof iconUrl === 'string' && iconUrl) {
      icon = <img className="auth0-lock-custom-icon" alt={ariaLabel || name} src={iconUrl} />;
    }

    return (
      <InputWrap
        focused={focused}
        invalidHint={invalidHint}
        isValid={isValid}
        name="confirm_password"
        icon={icon}
      >
        <input
          id={`${lockId}-${'confirm_password'}`}
          ref="input"
          type="password"
          name="confirm_password"
          className="auth0-lock-input"
          autoComplete="off"
          autoCapitalize="off"
          onChange={::this.handleOnChange}
          onFocus={::this.handleFocus}
          onBlur={::this.handleBlur}
          value={value}
          aria-label={ariaLabel || 'ConfirmPassword'}
          aria-invalid={!isValid}
          aria-describedby="auth0-lock-error-msg-confirm_password"
        />
      </InputWrap>
    );
  }

  handleOnChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  handleBlur() {
    this.setState({ focused: false });
  }
}
