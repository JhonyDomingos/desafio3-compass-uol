export type Replace<OriginalType, ReplaceTypes> = Omit<
  OriginalType,
  keyof ReplaceTypes
> &
  ReplaceTypes;

// Ele substitui os tipos de uma interface por outros tipos, mantendo os tipos que não foram substituídos.