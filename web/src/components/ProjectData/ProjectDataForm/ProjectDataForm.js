import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

const ProjectDataForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.projectData?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.projectData?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>

        <TextField
          name="category"
          defaultValue={props.projectData?.category}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="category" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>

        <TextField
          name="image"
          defaultValue={props.projectData?.image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image" className="rw-field-error" />

        <Label
          name="video"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Video
        </Label>

        <TextField
          name="video"
          defaultValue={props.projectData?.video}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="video" className="rw-field-error" />

        <Label
          name="clientName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client name
        </Label>

        <TextField
          name="clientName"
          defaultValue={props.projectData?.clientName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="clientName" className="rw-field-error" />

        <Label
          name="clientWebsite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client website
        </Label>

        <TextField
          name="clientWebsite"
          defaultValue={props.projectData?.clientWebsite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="clientWebsite" className="rw-field-error" />

        <Label
          name="objective"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Objective
        </Label>

        <TextField
          name="objective"
          defaultValue={props.projectData?.objective}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="objective" className="rw-field-error" />

        <Label
          name="tools"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tools
        </Label>

        <TextField
          name="tools"
          defaultValue={props.projectData?.tools}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tools" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextAreaField
          name="body"
          defaultValue={props.projectData?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <Label
          name="by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          By
        </Label>

        <TextField
          name="by"
          defaultValue={props.projectData?.by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="by" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectDataForm
