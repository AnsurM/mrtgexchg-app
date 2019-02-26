import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class BasicForms extends PureComponent {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'form/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="Real Estate" />}
        content={<FormattedMessage id="You can use this form to add Real Estate." />}
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label={<FormattedMessage id="ID" />}>
              {getFieldDecorator('ID', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'Enter ID' }),
                  },
                ],
              })(<Input placeholder={formatMessage({ id: 'Enter ID here.' })} />)}
            </FormItem>
            <FormItem {...formItemLayout} label={<FormattedMessage id="Address" />}>
              {getFieldDecorator('Address', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'Enter Address' }),
                  },
                ],
              })(<Input placeholder={formatMessage({ id: 'Enter Address here.' })} />)}
            </FormItem>
            <FormItem {...formItemLayout} label={<FormattedMessage id="Value" />}>
              {getFieldDecorator('Value', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'Enter Value' }),
                  },
                ],
              })(<Input type="number" pattern="[0-9]*" placeholder={formatMessage({ id: 'Enter Value here' })} />)}
            </FormItem>
            <FormItem {...formItemLayout} label={<FormattedMessage id="Details" />}>
              {getFieldDecorator('Details', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'Enter Details' }),
                  },
                ],
              })(<Input placeholder={formatMessage({ id: 'Enter Details here' })} />)}
            </FormItem>
            <FormItem {...formItemLayout} label={<FormattedMessage id="Owner" />}>
              {getFieldDecorator('Owner', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'Enter Owner' }),
                  },
                ],
              })(<Input placeholder={formatMessage({ id: 'Enter Owner here' })} />)}
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="form.submit" />
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicForms;
