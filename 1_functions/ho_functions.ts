{
  type JsonSchema = any;

  const validateJson = <T>(schema: JsonSchema, data: any): T => {
    // Do something with the schema
    //  - Validate fields
    //  - Remove extra fields if any
    return data as T;
  };

  // Different file
  const userSchema: JsonSchema = {};
  type User = {
    name: string;
  };

  function validateUser(data: any): User {
    return validateJson(userSchema, data);
  }

  // Validate request
  const input: any = {};
  const user: User = validateUser(input);
}

// High Order functions
{
  type JsonSchema = any;

  // Currying of previous versions
  const validateJson =
    (
      schema: any // Schema could be compiled as this stage
    ) =>
    <T>(data: any): T => {
      // Do something with the schema
      //  - Validate fields
      //  - Remove extra fields if any
      return data as T;
    };

  // Different file
  const userSchema: JsonSchema = {};
  type User = {
    name: string;
  };

  //  function validateUser(data: any): User {
  //     return validateJson(userSchema, data);
  //  }
  // const validateUser = (data: any) => validateJson(userSchema, data)
  const validateUser = validateJson(userSchema);

  // Validate request
  const input: any = {};
  const user: User = validateUser(input);
}
