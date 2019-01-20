package AH1N1.OCA.model;


import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class NewFolderDto {

    @NotNull private String name;
    @NotNull private Long categoryId;
    @NotNull  private Integer position;
}
