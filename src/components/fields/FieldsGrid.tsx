import { MetadataField, FormValues } from "../../types";
import { FieldRenderer } from "./FieldRenderer";
import { SPACING } from "../../constants";
import { getFieldDefault } from "../../utils";

interface FieldsGridProps {
  fields: MetadataField[];
  halfPairs: Set<string>;
  values: FormValues;
  onChange: (key: string, value: string | boolean) => void;
  errorKeys: Set<string>;
}

export const FieldsGrid: React.FC<FieldsGridProps> = ({
  fields,
  halfPairs,
  values,
  onChange,
  errorKeys,
}) => {
  const rows: (MetadataField | [MetadataField, MetadataField])[] = [];
  let i = 0;

  while (i < fields.length) {
    const field = fields[i];
    if (
      halfPairs.has(field.key) &&
      i + 1 < fields.length &&
      halfPairs.has(fields[i + 1].key)
    ) {
      rows.push([field, fields[i + 1]]);
      i += 2;
    } else {
      rows.push(field);
      i++;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING.xl }}>
      {rows.map((row, idx) => {
        if (Array.isArray(row)) {
          return (
            <div key={idx} style={{ display: "flex", gap: SPACING.xxl }}>
              <div style={{ flex: 1 }}>
                <FieldRenderer
                  field={row[0]}
                  value={values[row[0].key] ?? getFieldDefault(row[0])}
                  onChange={onChange}
                  hasError={errorKeys.has(row[0].key)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <FieldRenderer
                  field={row[1]}
                  value={values[row[1].key] ?? getFieldDefault(row[1])}
                  onChange={onChange}
                  hasError={errorKeys.has(row[1].key)}
                />
              </div>
            </div>
          );
        }
        return (
          <FieldRenderer
            key={row.key}
            field={row}
            value={values[row.key] ?? getFieldDefault(row)}
            onChange={onChange}
            hasError={errorKeys.has(row.key)}
          />
        );
      })}
    </div>
  );
};
