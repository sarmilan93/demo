import { MetadataField, DropdownField } from "../../types";
import { FieldLabel } from "./FieldLabel";
import { TextInput } from "../common/Input/TextInput";
import { SelectInput } from "../common/Input/SelectInput";
import { DateInput } from "../common/Input/DateInput";
import { CheckboxInput } from "../common/Input/CheckboxInput";
import { COLORS, FONTS } from "../../constants";

interface FieldRendererProps {
  field: MetadataField;
  value: string | boolean;
  onChange: (key: string, value: string | boolean) => void;
  hasError: boolean;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  field,
  value,
  onChange,
  hasError,
}) => {
  const stringValue = typeof value === "string" ? value : "";
  const booleanValue = typeof value === "boolean" ? value : false;

  return (
    <div>
      {field.dataType !== "checkbox" && (
        <FieldLabel
          label={field.label}
          required={field.required}
          readOnly={field.readOnly}
        />
      )}

      {(field.dataType === "string" || field.dataType === "link") && (
        <TextInput
          fieldKey={field.key}
          value={stringValue}
          onChange={onChange}
          placeholder="Journal title"
          readOnly={field.readOnly}
          hasError={hasError}
        />
      )}

      {field.dataType === "dropdown" && (
        <SelectInput
          fieldKey={field.key}
          value={stringValue}
          options={(field as DropdownField).options}
          onChange={onChange}
          placeholder="Journal title"
          readOnly={field.readOnly}
          hasError={hasError}
        />
      )}

      {field.dataType === "date" && (
        <DateInput
          fieldKey={field.key}
          value={stringValue}
          onChange={onChange}
          readOnly={field.readOnly}
          hasError={hasError}
        />
      )}

      {field.dataType === "datetime" && (
        <DateInput
          fieldKey={field.key}
          value={stringValue}
          onChange={onChange}
          readOnly={field.readOnly}
          includeTime
          hasError={hasError}
        />
      )}

      {field.dataType === "checkbox" && (
        <CheckboxInput
          fieldKey={field.key}
          checked={booleanValue}
          onChange={onChange}
          label={field.label}
          readOnly={field.readOnly}
        />
      )}

      {hasError && (
        <div
          style={{
            fontSize: FONTS.size.lg,
            color: COLORS.error,
            marginTop: 4,
            fontFamily: FONTS.family,
          }}
        >
          {field.label} is required
        </div>
      )}
    </div>
  );
};
